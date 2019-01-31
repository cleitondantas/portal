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

import com.montreal.portal.entity.TipoCliente;
import com.montreal.portal.repository.TipoClienteRepository;
import com.montreal.portal.response.Response;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "*")
public class TipoPessoaControler {

	@Autowired
	private TipoClienteRepository tipoClienteRepository; 
	
	
	@GetMapping(value = "/tipoclientes")	
	@PreAuthorize("hasAnyRole('ADMIN','ANALISTA','TECNICO')")
    public ResponseEntity<Response<Iterable<TipoCliente>>> findAllTipoCliente() {
		Response<Iterable<TipoCliente>> response = new Response<Iterable<TipoCliente>>();
		Iterable<TipoCliente> users = tipoClienteRepository.findAll();
		if (users == null) {
			response.getErrors().add("Not Fund:");
			return ResponseEntity.badRequest().body(response);
		}
		response.setData(users);
		return ResponseEntity.ok(response);
    }
	
	@PostMapping(value = "/tipocliente")
	@PreAuthorize("hasAnyRole('ADMIN','ANALISTA','TECNICO')")
	public ResponseEntity<Response<TipoCliente>> create(HttpServletRequest request, @RequestBody TipoCliente tipoCliente,BindingResult result) {
		Response<TipoCliente> response = new Response<TipoCliente>();
		try {
			if (result.hasErrors()) {
				result.getAllErrors().forEach(error -> response.getErrors().add(error.getDefaultMessage()));
				return ResponseEntity.badRequest().body(response);
			}
			TipoCliente userPersisted = (TipoCliente) tipoClienteRepository.save(tipoCliente);
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
