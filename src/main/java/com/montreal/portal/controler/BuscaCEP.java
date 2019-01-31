package com.montreal.portal.controler;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sun.jersey.api.client.Client;
import com.sun.jersey.api.client.WebResource;


@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "*")
public class BuscaCEP {
	
	
	@GetMapping(value = "/cep/{cod}")
	public ResponseEntity<String> getcep(@PathVariable String cod) {
		 Client c = Client.create();
		 WebResource wr = c.resource("https://viacep.com.br/ws/"+cod+"/json/");
		return ResponseEntity.ok(wr.get(String.class));
    }
	
}
