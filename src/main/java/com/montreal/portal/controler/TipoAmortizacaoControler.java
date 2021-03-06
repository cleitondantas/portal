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

import com.montreal.portal.entity.TipoAmortizacao;
import com.montreal.portal.repository.TipoAmortizacaoRepository;
import com.montreal.portal.response.Response;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "*")
public class TipoAmortizacaoControler {

	
	@Autowired
	private TipoAmortizacaoRepository tipoAmortizacaoRepository;
	
	
	@GetMapping(value = "/tipoamortizacao")	
	@PreAuthorize("hasAnyRole('ADMIN','ANALISTA','TECNICO')")
    public ResponseEntity<Response<Iterable<com.montreal.portal.entity.TipoAmortizacao>>> findAllTipoAmortizacao() {
		Response<Iterable<com.montreal.portal.entity.TipoAmortizacao>> response = new Response<Iterable<com.montreal.portal.entity.TipoAmortizacao>>();
		Iterable<com.montreal.portal.entity.TipoAmortizacao> users = tipoAmortizacaoRepository.findAll();
		if (users == null) {
			response.getErrors().add("Not Fund:");
			return ResponseEntity.badRequest().body(response);
		}
		response.setData(users);
		return ResponseEntity.ok(response);
    }

	
	@PostMapping(value = "/tipoamortizacao")
	@PreAuthorize("hasAnyRole('ADMIN','ANALISTA','TECNICO')")
	public ResponseEntity<Response<TipoAmortizacao>> create(HttpServletRequest request, @RequestBody TipoAmortizacao tipoAmortizacao,BindingResult result) {
		Response<TipoAmortizacao> response = new Response<TipoAmortizacao>();
		try {
			if (result.hasErrors()) {
				result.getAllErrors().forEach(error -> response.getErrors().add(error.getDefaultMessage()));
				return ResponseEntity.badRequest().body(response);
			}
			TipoAmortizacao userPersisted = (TipoAmortizacao) tipoAmortizacaoRepository.save(tipoAmortizacao);
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
