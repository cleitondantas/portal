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

import com.montreal.portal.entity.Empreendimentos;
import com.montreal.portal.repository.EmpreendimentosRepository;
import com.montreal.portal.response.Response;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "*")
public class EmpreendimentoControler {

	@Autowired
	private EmpreendimentosRepository empreendimentosRepository;
	
	
	@GetMapping(value = "/empreendimentos")
    public ResponseEntity<Response<Iterable<Empreendimentos>>> findAllEmpreendimentos() {
		Response<Iterable<Empreendimentos>> response = new Response<Iterable<Empreendimentos>>();
		Iterable<Empreendimentos> users = empreendimentosRepository.findAll();
		if (users == null) {
			response.getErrors().add("Not Fund:");
			return ResponseEntity.badRequest().body(response);
		}
		response.setData(users);
		return ResponseEntity.ok(response);
    }
	
	@PostMapping(value = "/empreendimento")
	public ResponseEntity<Response<Empreendimentos>> create(HttpServletRequest request, @RequestBody Empreendimentos  contatoClientes,BindingResult result) {
		Response<Empreendimentos> response = new Response<Empreendimentos>();
		try {
			if (result.hasErrors()) {
				result.getAllErrors().forEach(error -> response.getErrors().add(error.getDefaultMessage()));
				return ResponseEntity.badRequest().body(response);
			}
			Empreendimentos userPersisted = (Empreendimentos) empreendimentosRepository.save(contatoClientes);
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
