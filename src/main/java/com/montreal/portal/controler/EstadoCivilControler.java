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

import com.montreal.portal.entity.EstadoCivil;
import com.montreal.portal.repository.EstadoCivilRepository;
import com.montreal.portal.response.Response;


@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "*")
public class EstadoCivilControler {

	@Autowired
	private EstadoCivilRepository estadoCivilRepository;
	
	
	
	@GetMapping(value = "/estadocivil")
    public ResponseEntity<Response<Iterable<EstadoCivil>>> findAllEstadoCivil() {
		Response<Iterable<EstadoCivil>> response = new Response<Iterable<EstadoCivil>>();
		Iterable<EstadoCivil> users = estadoCivilRepository.findAll();
		if (users == null) {
			response.getErrors().add("Not Fund:");
			return ResponseEntity.badRequest().body(response);
		}
		response.setData(users);
		return ResponseEntity.ok(response);
    }
	
	@PostMapping(value = "/estadocivil")
	public ResponseEntity<Response<EstadoCivil>> create(HttpServletRequest request, @RequestBody EstadoCivil  estadoCivil,BindingResult result) {
		Response<EstadoCivil> response = new Response<EstadoCivil>();
		try {
			if (result.hasErrors()) {
				result.getAllErrors().forEach(error -> response.getErrors().add(error.getDefaultMessage()));
				return ResponseEntity.badRequest().body(response);
			}
			EstadoCivil userPersisted = (EstadoCivil) estadoCivilRepository.save(estadoCivil);
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
