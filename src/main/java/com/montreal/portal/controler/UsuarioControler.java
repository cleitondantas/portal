package com.montreal.portal.controler;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.montreal.portal.entity.Usuario;
import com.montreal.portal.repository.UsuarioRepository;
import com.montreal.portal.response.Response;


@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "*")
public class UsuarioControler {

	
	@Autowired
	private UsuarioRepository usuarioRepository;
	
	
	
	@GetMapping(value = "/usuario/{codUsuario}")
	@PreAuthorize("hasAnyRole('ADMIN','ANALISTA','TECNICO')")
    public ResponseEntity<Response<Usuario>> findByCodUsuario(@PathVariable Integer codUsuario) {
		Response<Usuario> response = new Response<Usuario>();
		Usuario users = usuarioRepository.findByCodUsuario(codUsuario);
		if (users == null) {
			response.getErrors().add("Not Fund:");
			return ResponseEntity.badRequest().body(response);
		}
		response.setData(users);
		return ResponseEntity.ok(response);
    }
	
}
