package com.montreal.portal.controler;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import com.montreal.portal.entity.Fase;
import com.montreal.portal.repository.FaseRepository;
import com.montreal.portal.response.Response;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "*")
public class FaseControler {

	
	
	@Autowired
	private FaseRepository faseRepository;
	
	
	@GetMapping(value = "/fases")
	@PreAuthorize("hasAnyRole('ADMIN','ANALISTA','TECNICO')")
    public ResponseEntity<Response<Iterable<Fase>>> findAllFases() {
		Response<Iterable<Fase>> response = new Response<Iterable<Fase>>();
		Iterable<Fase> fases = faseRepository.findAll();
		if (fases == null) {
			response.getErrors().add("Not Fund:");
			return ResponseEntity.badRequest().body(response);
		}
		response.setData(fases);
		return ResponseEntity.ok(response);
	}
	
	@GetMapping(value = "/fase/{numfase}")
	@PreAuthorize("hasAnyRole('ADMIN','ANALISTA','TECNICO')")
    public ResponseEntity<Response<Iterable<Fase>>> findNumFase(@PathVariable Integer numfase) {
		Response<Iterable<Fase>> response = new Response<>();
		Iterable<Fase> dadosFaturamento = faseRepository.findByNumfase(numfase);
		if (dadosFaturamento == null) {
			response.getErrors().add("Not Fund:");
			return ResponseEntity.badRequest().body(response);
		}
		response.setData(dadosFaturamento);
		return ResponseEntity.ok(response);
    }
	
}
