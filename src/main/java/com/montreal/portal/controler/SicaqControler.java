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

import com.montreal.portal.entity.Sicaq;
import com.montreal.portal.repository.SicaqRepository;
import com.montreal.portal.response.Response;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "*")
public class SicaqControler {
	
	
	@Autowired
	private SicaqRepository sicaqRepository;
	
	@GetMapping(value = "/sicaq")	
    public ResponseEntity<Response<Iterable<Sicaq>>> findAllSicaq() {
		Response<Iterable<Sicaq>> response = new Response<Iterable<Sicaq>>();
		Iterable<Sicaq> users = sicaqRepository.findAll();
		if (users == null) {
			response.getErrors().add("Not Fund:");
			return ResponseEntity.badRequest().body(response);
		}
		response.setData(users);
		return ResponseEntity.ok(response);
    }
	
	
	@PostMapping(value = "/sicaq")
	public ResponseEntity<Response<Sicaq>> create(HttpServletRequest request, @RequestBody Sicaq sicaq,BindingResult result) {
		Response<Sicaq> response = new Response<Sicaq>();
		try {
			if (result.hasErrors()) {
				result.getAllErrors().forEach(error -> response.getErrors().add(error.getDefaultMessage()));
				return ResponseEntity.badRequest().body(response);
			}
			Sicaq userPersisted = (Sicaq) sicaqRepository.save(sicaq);
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
