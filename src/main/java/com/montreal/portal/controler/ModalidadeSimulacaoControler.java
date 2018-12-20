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

import com.montreal.portal.entity.ModalidadeSimulacao;
import com.montreal.portal.repository.ModalidadeSimulacaoRepository;
import com.montreal.portal.response.Response;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "*")
public class ModalidadeSimulacaoControler {

	
	
	@Autowired
	private ModalidadeSimulacaoRepository simulacaoRepository;
	
	@GetMapping(value = "/modalidadesimulacoes")
    public ResponseEntity<Response<Iterable<ModalidadeSimulacao>>> findAllModalidadeSimulacao() {
		Response<Iterable<ModalidadeSimulacao>> response = new Response<Iterable<ModalidadeSimulacao>>();
		Iterable<ModalidadeSimulacao> users = simulacaoRepository.findAll();
		if (users == null) {
			response.getErrors().add("Not Fund:");
			return ResponseEntity.badRequest().body(response);
		}
		response.setData(users);
		return ResponseEntity.ok(response);
    }
	
	@PostMapping(value = "/modalidadesimulacao")
	public ResponseEntity<Response<ModalidadeSimulacao>> create(HttpServletRequest request, @RequestBody ModalidadeSimulacao  modalidadeSimulacao,BindingResult result) {
		Response<ModalidadeSimulacao> response = new Response<ModalidadeSimulacao>();
		try {
			if (result.hasErrors()) {
				result.getAllErrors().forEach(error -> response.getErrors().add(error.getDefaultMessage()));
				return ResponseEntity.badRequest().body(response);
			}
			ModalidadeSimulacao userPersisted = (ModalidadeSimulacao) simulacaoRepository.save(modalidadeSimulacao);
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
