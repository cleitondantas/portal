package com.montreal.portal.controler;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DuplicateKeyException;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.montreal.portal.entity.StatusSimulacao;
import com.montreal.portal.repository.StatusSimulacaoRepository;
import com.montreal.portal.response.Response;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "*")
public class StatusSimulacaoControler {

	
	@Autowired
	private StatusSimulacaoRepository statusSimulacaoRepository;
	
	
	@GetMapping(value = "/statussimulacao")	
    public ResponseEntity<Response<Iterable<StatusSimulacao>>> findAllSubStatusAnalise() {
		Response<Iterable<StatusSimulacao>> response = new Response<Iterable<StatusSimulacao>>();
		Iterable<StatusSimulacao> users = statusSimulacaoRepository.findAll();
		if (users == null) {
			response.getErrors().add("Not Fund:");
			return ResponseEntity.badRequest().body(response);
		}
		response.setData(users);
		return ResponseEntity.ok(response);
    }
	
	
	
	
	@PostMapping(value = "/statussimulacao")
	public ResponseEntity<Response<StatusSimulacao>> create(HttpServletRequest request, @RequestBody StatusSimulacao statusSimulacao,BindingResult result) {
		Response<StatusSimulacao> response = new Response<StatusSimulacao>();
		try {
			if (result.hasErrors()) {
				result.getAllErrors().forEach(error -> response.getErrors().add(error.getDefaultMessage()));
				return ResponseEntity.badRequest().body(response);
			}
			StatusSimulacao userPersisted = (StatusSimulacao) statusSimulacaoRepository.save(statusSimulacao);
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
