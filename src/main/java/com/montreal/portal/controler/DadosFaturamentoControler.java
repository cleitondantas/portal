package com.montreal.portal.controler;

import java.util.Date;

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

import com.montreal.portal.entity.DadosFaturamento;
import com.montreal.portal.repository.DadosFaturamentoRepository;
import com.montreal.portal.response.Response;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "*")
public class DadosFaturamentoControler {

	@Autowired
	private DadosFaturamentoRepository dadosFaturamentoRepository;
	
	@GetMapping(value = "/dadosfaturamentos")
	@PreAuthorize("hasAnyRole('ADMIN','ANALISTA','TECNICO')")
    public ResponseEntity<Response<Iterable<DadosFaturamento>>> findAllDadosFaturamento() {
		Response<Iterable<DadosFaturamento>> response = new Response<>();
		Iterable<DadosFaturamento> dadosFaturamento = dadosFaturamentoRepository.findAll();
		if (dadosFaturamento == null) {
			response.getErrors().add("Not Fund:");
			return ResponseEntity.badRequest().body(response);
		}
		response.setData(dadosFaturamento);
		return ResponseEntity.ok(response);
    }
	
	
	
	@GetMapping(value = "/dadosfaturamento/{codcadastro}")
	@PreAuthorize("hasAnyRole('ADMIN','ANALISTA','TECNICO')")
    public ResponseEntity<Response<Iterable<DadosFaturamento>>> findAllDadosFaturamento(@PathVariable Integer codcadastro) {
		Response<Iterable<DadosFaturamento>> response = new Response<>();
		Iterable<DadosFaturamento> dadosFaturamento = dadosFaturamentoRepository.findAllDadosFaturamento(codcadastro);
		if (dadosFaturamento == null) {
			response.getErrors().add("Not Fund:");
			return ResponseEntity.badRequest().body(response);
		}
		response.setData(dadosFaturamento);
		return ResponseEntity.ok(response);
    }
	
	
	@PostMapping(value = "/dadosfaturamento")
	@PreAuthorize("hasAnyRole('ADMIN','ANALISTA','TECNICO')")
	public ResponseEntity<Response<DadosFaturamento>> create(HttpServletRequest request, @RequestBody DadosFaturamento dadosFaturamento,BindingResult result) {
		Response<DadosFaturamento> response = new Response<DadosFaturamento>();
		try {
			dadosFaturamento.setDtatividade(new Date());
			if (result.hasErrors()) {
				result.getAllErrors().forEach(error -> response.getErrors().add(error.getDefaultMessage()));
				return ResponseEntity.badRequest().body(response);
			}
			DadosFaturamento dadosFaturamentorest = (DadosFaturamento) dadosFaturamentoRepository.save(dadosFaturamento);
			response.setData(dadosFaturamentorest);
		} catch (DuplicateKeyException dE) {
			response.getErrors().add("already registered !");
			return ResponseEntity.badRequest().body(response);
		} catch (Exception e) {
			response.getErrors().add(e.getMessage());
			return ResponseEntity.badRequest().body(response);
		}
		return ResponseEntity.ok(response);
	}
	
	@PutMapping(value = "/dadosfaturamento")
	@PreAuthorize("hasAnyRole('ADMIN','ANALISTA','TECNICO')")
	public ResponseEntity<Response<DadosFaturamento>> update(HttpServletRequest request, @RequestBody DadosFaturamento dadosFaturamento,BindingResult result) {
		Response<DadosFaturamento> response = new Response<DadosFaturamento>();
		try {
			dadosFaturamento.setDtatividade(new Date());
			if (result.hasErrors()) {
				result.getAllErrors().forEach(error -> response.getErrors().add(error.getDefaultMessage()));
				return ResponseEntity.badRequest().body(response);
			}
			DadosFaturamento dadosFaturamentorest = (DadosFaturamento) dadosFaturamentoRepository.save(dadosFaturamento);
			response.setData(dadosFaturamentorest);
		} catch (DuplicateKeyException dE) {
			response.getErrors().add("already registered !");
			return ResponseEntity.badRequest().body(response);
		} catch (Exception e) {
			response.getErrors().add(e.getMessage());
			return ResponseEntity.badRequest().body(response);
		}
		return ResponseEntity.ok(response);
	}
	
	
}
