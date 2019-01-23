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

import com.montreal.portal.entity.Incorporadora;
import com.montreal.portal.repository.IncorporadorasRepository;
import com.montreal.portal.response.Response;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "*")
public class IncorporadorasControler {

	@Autowired
	private IncorporadorasRepository incorporadorasRepository;
	
	@GetMapping(value = "/incorporadoras")
    public ResponseEntity<Response<Iterable<Incorporadora>>> findAllInstituicaoFinanceira() {
		Response<Iterable<Incorporadora>> response = new Response<Iterable<Incorporadora>>();
		Iterable<Incorporadora> users = incorporadorasRepository.findAll();
		if (users == null) {
			response.getErrors().add("Not Fund:");
			return ResponseEntity.badRequest().body(response);
		}
		response.setData(users);
		return ResponseEntity.ok(response);
    }
	
	
	@PostMapping(value = "/incorporadora")
	public ResponseEntity<Response<Incorporadora>> create(HttpServletRequest request, @RequestBody Incorporadora  incorporadora,BindingResult result) {
		Response<Incorporadora> response = new Response<Incorporadora>();
		try {
			if (result.hasErrors()) {
				result.getAllErrors().forEach(error -> response.getErrors().add(error.getDefaultMessage()));
				return ResponseEntity.badRequest().body(response);
			}
			Incorporadora userPersisted = (Incorporadora) incorporadorasRepository.save(incorporadora);
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
