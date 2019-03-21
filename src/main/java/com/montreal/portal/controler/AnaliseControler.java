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

import com.montreal.portal.entity.Analise;
import com.montreal.portal.entity.Simulacao;
import com.montreal.portal.repository.AnaliseRepositoy;
import com.montreal.portal.response.Response;


@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "*")
public class AnaliseControler {

	@Autowired
	private AnaliseRepositoy analiseRepositoy;
	
	
	@GetMapping(value = "/analises")
	@PreAuthorize("hasAnyRole('ADMIN','ANALISTA','TECNICO')")
    public ResponseEntity<Response<Iterable<Analise>>> findAllAnalise() {
		Response<Iterable<Analise>> response = new Response<Iterable<Analise>>();
		Iterable<Analise> users = analiseRepositoy.findAll();
		if (users == null) {
			response.getErrors().add("Not Fund:");
			return ResponseEntity.badRequest().body(response);
		}
		response.setData(users);
		return ResponseEntity.ok(response);
    }
	
	@GetMapping(value = "/analises/{codcadastro}")
	@PreAuthorize("hasAnyRole('ADMIN','ANALISTA','TECNICO')")
    public ResponseEntity<Response<Iterable<Analise>>> findAnaliseJuridicaWithFid(@PathVariable String codcadastro) {
		Response<Iterable<Analise>> response = new Response<Iterable<Analise>>();
		Iterable<Analise> analises = analiseRepositoy.findCadastroWithPartOfFid(Integer.parseInt(codcadastro));
		if (analises == null) {
			response.getErrors().add("Not Fund:");
			return ResponseEntity.badRequest().body(response);
		}
		response.setData(analises);
		return ResponseEntity.ok(response);
    }
	
	
	@PostMapping(value = "/analise")
	@PreAuthorize("hasAnyRole('ADMIN','ANALISTA','TECNICO')")
	public ResponseEntity<Response<Analise>> create(HttpServletRequest request, @RequestBody Analise  analise,BindingResult result) {
		Response<Analise> response = new Response<Analise>();
		
		
		try {
			Date  now  = new Date();
			analise.setDatasimulacao(now);
			for(Simulacao item: analise.getSimulacoes()) {
				item.setDatasimulacao(now);
				if(item.getSimulacaoselecionado()) {
					analise.setCodsimulacaofinanciado(item.getCodsimulacao());
				}
			}
			
			if (result.hasErrors()) {
				result.getAllErrors().forEach(error -> response.getErrors().add(error.getDefaultMessage()));
				return ResponseEntity.badRequest().body(response);
			}
			Analise userPersisted = (Analise) analiseRepositoy.save(analise);
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

	
	 
	 @PutMapping("/analise")
	 @PreAuthorize("hasAnyRole('ADMIN','ANALISTA','TECNICO')")
	 public ResponseEntity<Response<Analise>> update(@RequestBody Analise analise,BindingResult result){
			Response<Analise> response = new Response<Analise>();
			try {
				
				//analiseRepositoy.findById(Integer.parseInt(id));
				Date  now  = new Date();
				analise.setDatasimulacao(now);
				for(Simulacao item: analise.getSimulacoes()) {
					item.setDatasimulacao(now);
					if(item.getSimulacaoselecionado()) {
						analise.setCodsimulacaofinanciado(item.getCodcadastro());
					}
				}
				if (result.hasErrors()) {
					result.getAllErrors().forEach(error -> response.getErrors().add(error.getDefaultMessage()));
					return ResponseEntity.badRequest().body(response);
				}
				Analise userPersisted = (Analise) analiseRepositoy.save(analise);
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