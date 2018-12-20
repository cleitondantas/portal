package com.montreal.portal.security.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.montreal.portal.entity.Usuario;
import com.montreal.portal.security.jwt.JwtUserFactory;
import com.montreal.portal.service.UsuarioService;


@Service
public class JwtUserDetailsServiceImpl  implements UserDetailsService {

    @Autowired
    private UsuarioService usuarioService;
    
    @Override
    public UserDetails loadUserByUsername(String login) throws UsernameNotFoundException {
    		Usuario user = usuarioService.findByLogin(login);
        if (user == null) {
            throw new UsernameNotFoundException(String.format("No user found with username '%s'.", login));
        } else if(user.getIsAtivo()==false){
        	throw new UsernameNotFoundException(String.format("Not is Ativo username '%s'.", login));
        }else {
        	return JwtUserFactory.create(user);	
        }
    }

}