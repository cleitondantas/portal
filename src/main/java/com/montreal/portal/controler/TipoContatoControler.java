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

import com.montreal.portal.entity.TipoContato;
import com.montreal.portal.repository.TipoContatoRepository;
import com.montreal.portal.response.Response;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "*")
public class TipoContatoControler {
	

	@Autowired
	private TipoContatoRepository tipoContatoRepository;
	
	@GetMapping(value = "/tipocontatos")	
    public ResponseEntity<Response<Iterable<TipoContato>>> findAllTipoContato() {
		Response<Iterable<TipoContato>> response = new Response<Iterable<TipoContato>>();
		Iterable<TipoContato> users = tipoContatoRepository.findAll();
		if (users == null) {
			response.getErrors().add("Not Fund:");
			return ResponseEntity.badRequest().body(response);
		}
		response.setData(users);
		return ResponseEntity.ok(response);
    }
	
	
	@PostMapping(value = "/tipocontato")
	public ResponseEntity<Response<TipoContato>> create(HttpServletRequest request, @RequestBody TipoContato tipoContato,BindingResult result) {
		Response<TipoContato> response = new Response<TipoContato>();
		try {
			if (result.hasErrors()) {
				result.getAllErrors().forEach(error -> response.getErrors().add(error.getDefaultMessage()));
				return ResponseEntity.badRequest().body(response);
			}
			TipoContato userPersisted = (TipoContato) tipoContatoRepository.save(tipoContato);
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
