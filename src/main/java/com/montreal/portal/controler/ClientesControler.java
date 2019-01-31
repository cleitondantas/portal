package com.montreal.portal.controler;

import java.util.Optional;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DuplicateKeyException;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.montreal.portal.entity.Cliente;
import com.montreal.portal.repository.ClientesRepository;
import com.montreal.portal.response.Response;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "*")
public class ClientesControler {

	@Autowired
	private ClientesRepository clientesRepository;
	
	@GetMapping(value = "/clientes")
	@PreAuthorize("hasAnyRole('ADMIN','ANALISTA','TECNICO')")
    public ResponseEntity<Response<Iterable<Cliente>>> findAllClientes() {
		Response<Iterable<Cliente>> response = new Response<Iterable<Cliente>>();
		Iterable<Cliente> users = clientesRepository.findAll();
		if (users == null) {
			response.getErrors().add("Not Fund:");
			return ResponseEntity.badRequest().body(response);
		}
		response.setData(users);
		return ResponseEntity.ok(response);
    }
	
	
	@PostMapping(value = "/cliente")
	@PreAuthorize("hasAnyRole('ADMIN','ANALISTA','TECNICO')")
	public ResponseEntity<Response<Cliente>> create(HttpServletRequest request, @RequestBody Cliente  client,BindingResult result) {
		Response<Cliente> response = new Response<Cliente>();
		try {
			if(client == null ||  client.getCpfcnpj()==null || client.getCpfcnpj().length() < 10) {
				response.getErrors().add("ERRO:");
				return ResponseEntity.badRequest().body(response);
			}
			Optional<Cliente> getClient = clientesRepository.findById(client.getCpfcnpj());
			if (result.hasErrors()) {
				result.getAllErrors().forEach(error -> response.getErrors().add(error.getDefaultMessage()));
				return ResponseEntity.badRequest().body(response);
			}else if(getClient.isPresent()) {
				response.getErrors().add("ERRO: Ja existe no banco de dados");
				return ResponseEntity.badRequest().body(response);
			}
			Cliente userPersisted = (Cliente) clientesRepository.save(client);
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


	 @PutMapping("/cliente/{cpf}")
	 @PreAuthorize("hasAnyRole('ADMIN','ANALISTA','TECNICO')")
	 public ResponseEntity<Response<Cliente>> update(@PathVariable String cpf, @RequestBody Cliente client,BindingResult result){
			Response<Cliente> response = new Response<Cliente>();
			try {
				Optional<Cliente> getClient = clientesRepository.findById(cpf);
				if (result.hasErrors()) {
					result.getAllErrors().forEach(error -> response.getErrors().add(error.getDefaultMessage()));
					return ResponseEntity.badRequest().body(response);
				}else if(!getClient.isPresent()) {
					response.getErrors().add("ERRO: ID NAO ENCONTRADO");
					return ResponseEntity.badRequest().body(response);
				}
				client.setCpfcnpj(cpf);
				Cliente userPersisted = (Cliente) clientesRepository.save(client);
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
