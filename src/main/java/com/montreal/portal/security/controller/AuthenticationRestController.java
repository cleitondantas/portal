package com.montreal.portal.security.controller;



import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.montreal.portal.entity.Usuario;
import com.montreal.portal.security.CurrentUsuario;
import com.montreal.portal.security.jwt.JwtAuthenticationRequest;
import com.montreal.portal.security.jwt.JwtTokenUtil;
import com.montreal.portal.service.UsuarioService;



@RestController
@CrossOrigin(origins = "*")
public class AuthenticationRestController {

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private JwtTokenUtil jwtTokenUtil;

    @Autowired
    private UserDetailsService userDetailsService;
    
    @Autowired
    private UsuarioService usuarioService;

    
    
    @PostMapping(value="/api/auth")
    public ResponseEntity<?> createAuthenticationToken(@RequestBody JwtAuthenticationRequest authenticationRequest) throws AuthenticationException {
        final Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(authenticationRequest.getLogin(),authenticationRequest.getPassword()
                )
        );
        SecurityContextHolder.getContext().setAuthentication(authentication);
        final UserDetails userDetails = userDetailsService.loadUserByUsername(authenticationRequest.getLogin());
        final String token = jwtTokenUtil.generateToken(userDetails);
        final Usuario usuario = usuarioService.findByLogin(authenticationRequest.getLogin());
        usuario.setPassword(null);
        usuario.setId(null);
        
        return ResponseEntity.ok(new CurrentUsuario(token, usuario));
    }

    @PostMapping(value="/api/refresh")
    public ResponseEntity<?> refreshAndGetAuthenticationToken(HttpServletRequest request) {
        String token = request.getHeader("Authorization");
        String username = jwtTokenUtil.getUsernameFromToken(token);
        final Usuario usuario = usuarioService.findByLogin(username);

        if (jwtTokenUtil.canTokenBeRefreshed(token)) {
            String refreshedToken = jwtTokenUtil.refreshToken(token);
            return ResponseEntity.ok(new CurrentUsuario(refreshedToken, usuario));
        } else {
            return ResponseEntity.badRequest().body(null);
        }
    }

}
