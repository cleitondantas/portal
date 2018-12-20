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

import com.montreal.portal.entity.StatusAnalise;
import com.montreal.portal.repository.StatusAnaliseRepository;
import com.montreal.portal.response.Response;


@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "*")
public class StatusAnaliseControler {

	
	@Autowired
	private StatusAnaliseRepository statusAnaliseRepository;
	
	@GetMapping(value = "/statusanalises")	
    public ResponseEntity<Response<Iterable<StatusAnalise>>> findAllStatusAnalise() {
		Response<Iterable<StatusAnalise>> response = new Response<Iterable<StatusAnalise>>();
		Iterable<StatusAnalise> users = statusAnaliseRepository.findAll();
		if (users == null) {
			response.getErrors().add("Not Fund:");
			return ResponseEntity.badRequest().body(response);
		}
		response.setData(users);
		return ResponseEntity.ok(response);
    }
	
	@PostMapping(value = "/statusanalise")
	public ResponseEntity<Response<StatusAnalise>> create(HttpServletRequest request, @RequestBody StatusAnalise statusAnalise,BindingResult result) {
		Response<StatusAnalise> response = new Response<StatusAnalise>();
		try {
			if (result.hasErrors()) {
				result.getAllErrors().forEach(error -> response.getErrors().add(error.getDefaultMessage()));
				return ResponseEntity.badRequest().body(response);
			}
			StatusAnalise userPersisted = (StatusAnalise) statusAnaliseRepository.save(statusAnalise);
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

