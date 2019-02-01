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

import com.montreal.portal.entity.InstituicaoFinanceira;
import com.montreal.portal.repository.InstituicaoFinanceiraRepository;
import com.montreal.portal.response.Response;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "*")
public class InstituicaoFinanceiraControler {

	@Autowired
	private InstituicaoFinanceiraRepository instituicaoFinanceiraRepository;
	
	@GetMapping(value = "/instituicoesfinanceiras")
	@PreAuthorize("hasAnyRole('ADMIN','ANALISTA','TECNICO')")
    public ResponseEntity<Response<Iterable<InstituicaoFinanceira>>> findAllInstituicaoFinanceira() {
		Response<Iterable<InstituicaoFinanceira>> response = new Response<Iterable<InstituicaoFinanceira>>();
		Iterable<InstituicaoFinanceira> users = instituicaoFinanceiraRepository.findAll();
		if (users == null) {
			response.getErrors().add("Not Fund:");
			return ResponseEntity.badRequest().body(response);
		}
		response.setData(users);
		return ResponseEntity.ok(response);
    }
	
	
	@PostMapping(value = "/instituicaofinanceira")
	@PreAuthorize("hasAnyRole('ADMIN','ANALISTA','TECNICO')")
	public ResponseEntity<Response<InstituicaoFinanceira>> create(HttpServletRequest request, @RequestBody InstituicaoFinanceira  instituicaoFinanceira,BindingResult result) {
		Response<InstituicaoFinanceira> response = new Response<InstituicaoFinanceira>();
		try {
			if (result.hasErrors()) {
				result.getAllErrors().forEach(error -> response.getErrors().add(error.getDefaultMessage()));
				return ResponseEntity.badRequest().body(response);
			}
			InstituicaoFinanceira userPersisted = (InstituicaoFinanceira) instituicaoFinanceiraRepository.save(instituicaoFinanceira);
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
