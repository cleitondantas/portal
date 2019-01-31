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

import com.montreal.portal.entity.Spe;
import com.montreal.portal.repository.SpeRepository;
import com.montreal.portal.response.Response;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "*")
public class SpeControler {

	
	@Autowired
	private SpeRepository speRepository;
	
	
	@GetMapping(value = "/spe")	
	@PreAuthorize("hasAnyRole('ADMIN','ANALISTA','TECNICO')")
    public ResponseEntity<Response<Iterable<Spe>>> findAllSpe() {
		Response<Iterable<Spe>> response = new Response<Iterable<Spe>>();
		Iterable<Spe> users = speRepository.findAll();
		if (users == null) {
			response.getErrors().add("Not Fund:");
			return ResponseEntity.badRequest().body(response);
		}
		response.setData(users);
		return ResponseEntity.ok(response);
    }
	
	
	@PostMapping(value = "/spe")
	@PreAuthorize("hasAnyRole('ADMIN','ANALISTA','TECNICO')")
	public ResponseEntity<Response<Spe>> create(HttpServletRequest request, @RequestBody Spe spe,BindingResult result) {
		Response<Spe> response = new Response<Spe>();
		try {
			if (result.hasErrors()) {
				result.getAllErrors().forEach(error -> response.getErrors().add(error.getDefaultMessage()));
				return ResponseEntity.badRequest().body(response);
			}
			Spe userPersisted = (Spe) speRepository.save(spe);
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
