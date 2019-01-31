package com.montreal.portal.controler;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DuplicateKeyException;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.montreal.portal.entity.Originacao;
import com.montreal.portal.repository.OriginacaoRepository;
import com.montreal.portal.response.Response;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "*")
public class OriginacaoControler {

	
	@Autowired
	private OriginacaoRepository originacaoRepository;
	
	@GetMapping(value = "/originacoes")
	@PreAuthorize("hasAnyRole('ADMIN','ANALISTA','TECNICO')")
    public ResponseEntity<Response<Iterable<Originacao>>> findAllOriginacao() {
		Response<Iterable<Originacao>> response = new Response<Iterable<Originacao>>();
		Iterable<Originacao> users = originacaoRepository.findAll();
		if (users == null) {
			response.getErrors().add("Not Fund:");
			return ResponseEntity.badRequest().body(response);
		}
		response.setData(users);
		return ResponseEntity.ok(response);
    }
	
	
	@PostMapping(value = "/originacao")
	@PreAuthorize("hasAnyRole('ADMIN','ANALISTA','TECNICO')")
	public ResponseEntity<Response<Originacao>> create(HttpServletRequest request, @RequestBody Originacao  originacao,BindingResult result) {
		Response<Originacao> response = new Response<Originacao>();
		try {
			if (result.hasErrors()) {
				result.getAllErrors().forEach(error -> response.getErrors().add(error.getDefaultMessage()));
				return ResponseEntity.badRequest().body(response);
			}
			Originacao userPersisted = (Originacao) originacaoRepository.save(originacao);
			response.setData(userPersisted);
		} catch (DuplicateKeyException dE) {
			response.getErrors().add("E-mail already registered !");
			return ResponseEntity.badRequest().body(response);
		} catch (Exception e) {
			response.getErrors().add(e.getMessage());
			return ResponseEntity.badRequest().body(response);
		}
		return ResponseEntity.ok(response);
	}
	
}
