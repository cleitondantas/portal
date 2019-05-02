package com.montreal.portal.controler;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.montreal.portal.entity.Sintese;
import com.montreal.portal.repository.SinteseRepository;
import com.montreal.portal.response.Response;


@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "*")
public class SinteseControler {

	
	@Autowired
	public SinteseRepository sinteseRepository;
	
	@GetMapping(value = "/sinteses")
	@PreAuthorize("hasAnyRole('ADMIN','ANALISTA','TECNICO')")
    public ResponseEntity<Response<Iterable<Sintese>>> findAllFases() {
		Response<Iterable<Sintese>> response = new Response<Iterable<Sintese>>();
		Iterable<Sintese> sintese = sinteseRepository.findAll();
		if (sintese == null) {
			response.getErrors().add("Not Fund:");
			return ResponseEntity.badRequest().body(response);
		}
		response.setData(sintese);
		return ResponseEntity.ok(response);
	}
	
	
	
	@GetMapping(value = "/sintese/{numfase}/{numsintese}")
	@PreAuthorize("hasAnyRole('ADMIN','ANALISTA','TECNICO')")
    public ResponseEntity<Response<Iterable<Sintese>>> findBySintese(@PathVariable Integer numsintese,@PathVariable Integer numfase) {
		Response<Iterable<Sintese>> response = new Response<Iterable<Sintese>>();
		Iterable<Sintese> sintese = sinteseRepository.findBySintese(numsintese, numfase);
		if (sintese == null) {
			response.getErrors().add("Not Fund:");
			return ResponseEntity.badRequest().body(response);
		}
		response.setData(sintese);
		return ResponseEntity.ok(response);
	}
	
	
	
	@GetMapping(value = "/sintese/{local}")
	@PreAuthorize("hasAnyRole('ADMIN','ANALISTA','TECNICO')")
    public ResponseEntity<Response<Iterable<Sintese>>> findBySintesePorFase(@PathVariable Integer numfase) {
		Response<Iterable<Sintese>> response = new Response<Iterable<Sintese>>();
		Iterable<Sintese> sintese = sinteseRepository.findByNumfase(numfase);
		if (sintese == null) {
			response.getErrors().add("Not Fund:");
			return ResponseEntity.badRequest().body(response);
		}
		response.setData(sintese);
		return ResponseEntity.ok(response);
	}
	
}
