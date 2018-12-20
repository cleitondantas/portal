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

import com.montreal.portal.entity.SubStatusAnalise;
import com.montreal.portal.repository.SubStatusAnaliseRepository;
import com.montreal.portal.response.Response;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "*")
public class SubStatusAnaliseControler {

	

	@Autowired
	private SubStatusAnaliseRepository subStatusAnaliseRepository;
	
	
	
	@GetMapping(value = "/substatusanalise")	
    public ResponseEntity<Response<Iterable<SubStatusAnalise>>> findAllSubStatusAnalise() {
		Response<Iterable<SubStatusAnalise>> response = new Response<Iterable<SubStatusAnalise>>();
		Iterable<SubStatusAnalise> users = subStatusAnaliseRepository.findAll();
		if (users == null) {
			response.getErrors().add("Not Fund:");
			return ResponseEntity.badRequest().body(response);
		}
		response.setData(users);
		return ResponseEntity.ok(response);
    }
	
	
	
	@PostMapping(value = "/substatusanalise")
	public ResponseEntity<Response<SubStatusAnalise>> create(HttpServletRequest request, @RequestBody SubStatusAnalise subStatusAnalise,BindingResult result) {
		Response<SubStatusAnalise> response = new Response<SubStatusAnalise>();
		try {
			if (result.hasErrors()) {
				result.getAllErrors().forEach(error -> response.getErrors().add(error.getDefaultMessage()));
				return ResponseEntity.badRequest().body(response);
			}
			SubStatusAnalise userPersisted = (SubStatusAnalise) subStatusAnaliseRepository.save(subStatusAnalise);
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
