package com.montreal.portal.controler;

import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DuplicateKeyException;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.validation.BindingResult;
import org.springframework.validation.ObjectError;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.montreal.portal.entity.Role;
import com.montreal.portal.entity.Usuario;
import com.montreal.portal.response.Response;
import com.montreal.portal.service.RoleService;
import com.montreal.portal.service.UsuarioService;

@RestController
@RequestMapping("/api/user")
@CrossOrigin(origins = "*")
public class Controler {

		@Autowired
		private UsuarioService usuarioService;
		
	
		
		@Autowired
		private RoleService roleService;

		@Autowired
		private PasswordEncoder passwordEncoder;
		
		@PostMapping(value = "/usuario")
		@PreAuthorize("hasAnyRole('ADMIN')")
		public ResponseEntity<Response<Usuario>> create(HttpServletRequest request, @RequestBody Usuario user,BindingResult result) {
			Response<Usuario> response = new Response<Usuario>();
			try {
				validateCreateUser(user, result);
				if (result.hasErrors()) {
					result.getAllErrors().forEach(error -> response.getErrors().add(error.getDefaultMessage()));
					return ResponseEntity.badRequest().body(response);
				}
				List<Usuario> maxCodUsuarioList = usuarioService.maxxCodUsuario();
				
				for(Usuario item: maxCodUsuarioList)
					user.setCodUsuario(item.getCodUsuario()+1);
				    user.setIsAtivo(true);
				    user.setPassword(passwordEncoder.encode(user.getPassword()));
				    
				Usuario userPersisted = (Usuario) usuarioService.save(user);
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
		
		@PutMapping(value = "/usuario")
		@PreAuthorize("hasAnyRole('ADMIN')")
		public ResponseEntity<Response<Usuario>> edit(HttpServletRequest request, @RequestBody Usuario user,BindingResult result) {
			Response<Usuario> response = new Response<Usuario>();
		
			try {
				Usuario usuario = usuarioService.findByCodUsuario(user.getCodUsuario());
				validateCreateUser(user, result);
				if (result.hasErrors()) {
					result.getAllErrors().forEach(error -> response.getErrors().add(error.getDefaultMessage()));
					return ResponseEntity.badRequest().body(response);
				}
				if(usuario==null) {
					result.addError(new ObjectError("User", "Usuario não encotrado"));
				}else {
					 user.setId(usuario.getId());
					 user.setIsAtivo(true);
					 user.setPassword(usuario.getPassword());
					Usuario userPersisted = (Usuario) usuarioService.save(user);
					response.setData(userPersisted);
				}
			} catch (DuplicateKeyException dE) {
				response.getErrors().add("E-mail already registered !");
				return ResponseEntity.badRequest().body(response);
			} catch (Exception e) {
				response.getErrors().add(e.getMessage());
				return ResponseEntity.badRequest().body(response);
			}
			return ResponseEntity.ok(response);
		}
		
		@PutMapping(value = "/usuario/reset")
		@PreAuthorize("hasAnyRole('ADMIN')")
		public ResponseEntity<Response<Usuario>> resetSenha(HttpServletRequest request, @RequestBody Usuario user,BindingResult result) {
			Response<Usuario> response = new Response<Usuario>();
		
			try {
				Usuario usuario = usuarioService.findByCodUsuario(user.getCodUsuario());
				validateCreateUser(user, result);
				if (result.hasErrors()) {
					result.getAllErrors().forEach(error -> response.getErrors().add(error.getDefaultMessage()));
					return ResponseEntity.badRequest().body(response);
				}
				if(usuario==null) {
					result.addError(new ObjectError("User", "Usuario não encotrado"));
				}else {
					 user.setId(usuario.getId());
					 user.setIsAtivo(true);
					 user.setPassword(passwordEncoder.encode(user.getPassword()));
					Usuario userPersisted = (Usuario) usuarioService.save(user);
					response.setData(userPersisted);
				}
			} catch (DuplicateKeyException dE) {
				response.getErrors().add("E-mail already registered !");
				return ResponseEntity.badRequest().body(response);
			} catch (Exception e) {
				response.getErrors().add(e.getMessage());
				return ResponseEntity.badRequest().body(response);
			}
			return ResponseEntity.ok(response);
		}
		
		
		@DeleteMapping(value = "/usuario/{codUsuario}")
		@PreAuthorize("hasAnyRole('ADMIN')")
		public ResponseEntity<Response<Usuario>> delete(@PathVariable Integer codUsuario) {
			Response<Usuario> response = new Response<Usuario>();
			try {
				Usuario usuario = usuarioService.findByCodUsuario(codUsuario);
				if(usuario==null) {
			
				}else {
					usuario.setIsAtivo(false);
					Usuario userPersisted = (Usuario) usuarioService.save(usuario);
					response.setData(userPersisted);
				}
			} catch (DuplicateKeyException dE) {
				response.getErrors().add("E-mail already registered !");
				return ResponseEntity.badRequest().body(response);
			} catch (Exception e) {
				response.getErrors().add(e.getMessage());
				return ResponseEntity.badRequest().body(response);
			}
			return ResponseEntity.ok(response);
		}
		
		
		private void validateCreateUser(Usuario user, BindingResult result) {
			if (user.getEmail() == null) {
				result.addError(new ObjectError("User", "Email no information"));
				return;
			}
		}

		@GetMapping(value = "/roles")
	    public ResponseEntity<Response<Iterable<Role>>> findAllRoles() {
			System.out.println("-----PASSOU findAllUsuarios");
			Response<Iterable<Role>> response = new Response<Iterable<Role>>();
			Iterable<Role> roles = roleService.findAll();
			if (roles == null) {
				response.getErrors().add("Not Fund:");
				return ResponseEntity.badRequest().body(response);
			}
			response.setData(roles);
			return ResponseEntity.ok(response);
	    }

		@PostMapping(value = "/username")
		@PreAuthorize("hasAnyRole('ADMIN')")
		public ResponseEntity<Response<List<String>>> username(HttpServletRequest request, @RequestBody Usuario  user,BindingResult result) {
			String login = user.getLogin();
			Response<List<String>> response = new Response<List<String>>();
			try {
				List<String> resultados = usuarioService.findUsuariosWithPartOfLogin(login);
				if (result.hasErrors()) {
					result.getAllErrors().forEach(error -> response.getErrors().add(error.getDefaultMessage()));
					return ResponseEntity.badRequest().body(response);
				}

				response.setData(resultados);
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
