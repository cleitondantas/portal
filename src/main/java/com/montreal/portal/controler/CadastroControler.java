package com.montreal.portal.controler;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
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
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.montreal.portal.entity.Cadastro;
import com.montreal.portal.entity.Cliente;
import com.montreal.portal.entity.Contato;
import com.montreal.portal.repository.CasdastroRepository;
import com.montreal.portal.response.Response;

import io.reactivex.Observable;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "*")
public class CadastroControler {

	@Autowired
	private CasdastroRepository casdastroRepository;

	
	
	
	@PostMapping(value = "/cadastro")
	@PreAuthorize("hasAnyRole('ADMIN','ANALISTA','TECNICO')")
	public ResponseEntity<Response<Cadastro>> create(HttpServletRequest request, @RequestBody Cadastro cadastro, BindingResult result) {
		Response<Cadastro> response = new Response<Cadastro>();
		Date dtatividade  = new Date();
		try {
			if (result.hasErrors()) {
				result.getAllErrors().forEach(error -> response.getErrors().add(error.getDefaultMessage()));
				return ResponseEntity.badRequest().body(response);
			}
			if (cadastro.getCodcadastro() != null) {
				response.getErrors().add("ERRO: Colum @Id not null");
				return ResponseEntity.badRequest().body(response);
			}

			if (cadastro.getClientes() != null) {
				for (Cliente item : cadastro.getClientes()) {
					
					item.setCodusuario(cadastro.getCodusuario());
					for(Contato contato :item.getContatos()) {
						contato.setCpfcnpj(item.getCpfcnpj());
					}
					
					
					if (item.getPrincipal()) {
						cadastro.setCpfcnpj(item.getCpfcnpj());
					}
				}
			}
			cadastro.setDtatividade(dtatividade);
			Cadastro cs = (Cadastro) casdastroRepository.save(cadastro);
			response.setData(cs);
		} catch (Exception e) {
			response.getErrors().add(e.getMessage());
			return ResponseEntity.badRequest().body(response);
		}
		return ResponseEntity.ok(response);
	}

	@PutMapping(value = "/cadastro")
	@PreAuthorize("hasAnyRole('ADMIN','ANALISTA','TECNICO')")
	public ResponseEntity<Response<Cadastro>> update(HttpServletRequest request, @RequestBody Cadastro cadastro, BindingResult result) {
		Response<Cadastro> response = new Response<Cadastro>();
		Date atualizacao  = new Date();
		cadastro.setDtatualizacao(atualizacao);
		try {
			if (result.hasErrors()) {
				result.getAllErrors().forEach(error -> response.getErrors().add(error.getDefaultMessage()));
				return ResponseEntity.badRequest().body(response);
			}
			if (cadastro.getClientes() != null) {
				for (Cliente item : cadastro.getClientes()) {
					if (item.getPrincipal()) {
						cadastro.setCpfcnpj(item.getCpfcnpj());
					}
				}
			}
			if (cadastro.getCodcadastro() != null) {
				Cadastro cs = (Cadastro) casdastroRepository.save(cadastro);
				response.setData(cs);
			}
		} catch (Exception e) {
			response.getErrors().add(e.getMessage());
			return ResponseEntity.badRequest().body(response);
		}
		return ResponseEntity.ok(response);
	}

	@GetMapping(value = "/cadastros")
	@PreAuthorize("hasAnyRole('ADMIN','ANALISTA','TECNICO')")
	public ResponseEntity<Response<Iterable<Cadastro>>> findAllCadastro() {
		Response<Iterable<Cadastro>> response = new Response<Iterable<Cadastro>>();
		try {
			
			List<Cadastro> cadastros = casdastroRepository.findAll();

			for (Cadastro item : cadastros) {
				for (Cliente cliente : item.getClientes()) {
					if (item.getCpfcnpj() != null) {
						if (item.getCpfcnpj().equalsIgnoreCase(cliente.getCpfcnpj())) {
							cliente.setPrincipal(true);
						} else {
							cliente.setPrincipal(false);
						}
					}
				}
			}
			response.setData(cadastros);
		} catch (Exception e) {
			response.getErrors().add(e.getMessage());
			return ResponseEntity.badRequest().body(response);
		}
		return ResponseEntity.ok(response);
	}

	@GetMapping(value = "/cadastros/top")
	@PreAuthorize("hasAnyRole('ADMIN','ANALISTA','TECNICO')")
	public ResponseEntity<Response<Iterable<Cadastro>>> findTopCadastro() {
		Response<Iterable<Cadastro>> response = new Response<Iterable<Cadastro>>();
		try {
			
			List<Cadastro> cadastros = casdastroRepository.findTopCadastro();

			for (Cadastro item : cadastros) {
				for (Cliente cliente : item.getClientes()) {
					if (item.getCpfcnpj() != null) {
						if (item.getCpfcnpj().equalsIgnoreCase(cliente.getCpfcnpj())) {
							cliente.setPrincipal(true);
						} else {
							cliente.setPrincipal(false);
						}
					}
				}
			}
			response.setData(cadastros);
		} catch (Exception e) {
			response.getErrors().add(e.getMessage());
			return ResponseEntity.badRequest().body(response);
		}
		return ResponseEntity.ok(response);
	}

	
	//Busca por FID
	@GetMapping(value = "/cadastro/{cod}")
	@PreAuthorize("hasAnyRole('ADMIN','ANALISTA','TECNICO')")
	public ResponseEntity<Response<Iterable<Cadastro>>> findFidCadastro(@PathVariable String cod) {
		Response<Iterable<Cadastro>> response = new Response<Iterable<Cadastro>>();
		List<Cadastro>  cadastros  =  new ArrayList<Cadastro>();
		Cadastro cadastro =null;
		try {
		List<Cadastro> listCadastro = 	casdastroRepository.findCadastroWithPartOfFid(Integer.parseInt(cod));
		for(Cadastro item: listCadastro) {
			cadastro = item;
		}
			if (cadastro.getClientes() != null) {
				for (Cliente cliente : cadastro.getClientes()) {
					if (cadastro.getCpfcnpj() != null) {
						if (cadastro.getCpfcnpj().equalsIgnoreCase(cliente.getCpfcnpj())) {
							cliente.setPrincipal(true);
						} else {
							cliente.setPrincipal(false);
						}
					}
				}
			}
	
		} catch (Exception e) {
			response.getErrors().add(e.getMessage());
			return ResponseEntity.badRequest().body(response);
		}
		return ResponseEntity.ok(response);
	}
	
	
	@GetMapping(value = "/cadastro/nome/{nomeCliente}")
	@PreAuthorize("hasAnyRole('ADMIN','ANALISTA','TECNICO')")
	public ResponseEntity<Response<Iterable<Cadastro>>> findNomeClienteCadastro(@PathVariable String nomeCliente) {
		Response<Iterable<Cadastro>> response = new Response<Iterable<Cadastro>>();
		List<Cadastro>  cadastros  =  new ArrayList<Cadastro>();
		Cadastro cadastro =null;
		try {
		List<Cadastro> listCadastro = 	casdastroRepository.findCadastroWithPartOfNomeCliente(nomeCliente);
		for(Cadastro item: listCadastro) {
			cadastro = item;
		}
			if (cadastro.getClientes() != null) {
				for (Cliente cliente : cadastro.getClientes()) {
					if (cadastro.getCpfcnpj() != null) {
						if (cadastro.getCpfcnpj().equalsIgnoreCase(cliente.getCpfcnpj())) {
							cliente.setPrincipal(true);
						} else {
							cliente.setPrincipal(false);
						}
					}
				}
			}
			cadastros.add(cadastro);
			response.setData(cadastros);
	
		} catch (Exception e) {
			response.getErrors().add(e.getMessage());
			return ResponseEntity.badRequest().body(response);
		}
		return ResponseEntity.ok(response);
	}
	
	@GetMapping(value = "/cadastro/cpf/{cpf}")
	@PreAuthorize("hasAnyRole('ADMIN','ANALISTA','TECNICO')")
	public ResponseEntity<Response<Iterable<Cadastro>>> findCPFClienteCadastro(@PathVariable String cpf) {
		Response<Iterable<Cadastro>> response = new Response<Iterable<Cadastro>>();
		List<Cadastro>  cadastros  =  new ArrayList<Cadastro>();
		Cadastro cadastro =null;
		try {
		List<Cadastro> listCadastro = 	casdastroRepository.findCadastroWithPartOfCPFCliente(cpf);
		//	Optional<Cadastro> cadastroOptional = casdastroRepository.findById(Integer.parseInt(cod));
//			if(cadastroOptional.isPresent()) {
//				cadastro = cadastroOptional.get();
//			}
		
		for(Cadastro item: listCadastro) {
			cadastro = item;
		}
			if (cadastro.getClientes() != null) {
				for (Cliente cliente : cadastro.getClientes()) {
					if (cadastro.getCpfcnpj() != null) {
						if (cadastro.getCpfcnpj().equalsIgnoreCase(cliente.getCpfcnpj())) {
							cliente.setPrincipal(true);
						} else {
							cliente.setPrincipal(false);
						}
					}
				}
			}
			cadastros.add(cadastro);
			response.setData(cadastros);
	
		} catch (Exception e) {
			response.getErrors().add(e.getMessage());
			return ResponseEntity.badRequest().body(response);
		}
		return ResponseEntity.ok(response);
	}
}
