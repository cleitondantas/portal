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
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.montreal.portal.entity.Cadastro;
import com.montreal.portal.entity.Role;
import com.montreal.portal.entity.Usuario;
import com.montreal.portal.response.Response;
import com.montreal.portal.service.RoleService;
import com.montreal.portal.service.UsuarioService;
import com.sun.jersey.api.client.Client;
import com.sun.jersey.api.client.WebResource;

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
		
		private void validateCreateUser(Usuario user, BindingResult result) {
			if (user.getEmail() == null) {
				result.addError(new ObjectError("User", "Email no information"));
				return;
			}
		}
		
		@GetMapping(value = "/usuarios")
		@PreAuthorize("hasAnyRole('ADMIN','ANALISTA','TECNICO')")
	    public ResponseEntity<Response<Iterable<Usuario>>> findAllUsuarios() {
			Response<Iterable<Usuario>> response = new Response<Iterable<Usuario>>();
			Iterable<Usuario> users = usuarioService.findAll();
			if (users == null) {
				response.getErrors().add("Not Fund:");
				return ResponseEntity.badRequest().body(response);
			}
			response.setData(users);
			return ResponseEntity.ok(response);
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
		
		

		
//		@PostMapping(value = "/usuario")
//		@PreAuthorize("hasAnyRole('ADMIN')")
//		public ResponseEntity<Response<Usuario>> create(@RequestBody Usuario user,BindingResult result) {
//			System.out.println("-----PASSOU create USUARIO");
//			Response<Usuario> response = new Response<Usuario>();
//			try {
//				validateCreateUser(user, result);
//				if (result.hasErrors()) {
//					result.getAllErrors().forEach(error -> response.getErrors().add(error.getDefaultMessage()));
//					return ResponseEntity.badRequest().body(response);
//				}
//				user.setPassword(passwordEncoder.encode(user.getPassword()));
//				Usuario userPersisted = (Usuario) usuarioService.save(user);
//				response.setData(userPersisted);
//			} catch (DuplicateKeyException dE) {
//				response.getErrors().add("E-mail already registered !");
//				return ResponseEntity.badRequest().body(response);
//			} catch (Exception e) {
//				response.getErrors().add(e.getMessage());
//				return ResponseEntity.badRequest().body(response);
//			}
//			return ResponseEntity.ok(response);
//		}

//		private void validateCreateUser(User user, BindingResult result) {
//			if (user.getEmail() == null) {
//				result.addError(new ObjectError("User", "Email no information"));
//				return;
//			}
//		}


		
//		@PutMapping()
//		@PreAuthorize("hasAnyRole('ADMIN')")
//		public ResponseEntity<Response<User>> update(HttpServletRequest request, @RequestBody User user,
//				BindingResult result) {
//			Response<User> response = new Response<User>();
//			try {
//				validateUpdate(user, result);
//				if (result.hasErrors()) {
//					result.getAllErrors().forEach(error -> response.getErrors().add(error.getDefaultMessage()));
//					return ResponseEntity.badRequest().body(response);
//				}
//				user.setPassword(passwordEncoder.encode(user.getPassword()));
//				User userPersisted = (User) userService.createOrUpdate(user);
//				response.setData(userPersisted);
//			} catch (Exception e) {
//				response.getErrors().add(e.getMessage());
//				return ResponseEntity.badRequest().body(response);
//			}
//			return ResponseEntity.ok(response);
//		}
//		
//		private void validateUpdate(User user, BindingResult result) {
//			if (user.getId() == null) {
//				result.addError(new ObjectError("User", "Id no information"));
//				return;
//			}
//			if (user.getEmail() == null) {
//				result.addError(new ObjectError("User", "Email no information"));
//				return;
//			}
//		}
//		
//		@GetMapping(value = "{id}")
//		@PreAuthorize("hasAnyRole('ADMIN')")
//		public ResponseEntity<Response<User>> findById(@PathVariable("id") String id) {
//			Response<User> response = new Response<User>();
//			User user = userService.findById(id);
//			if (user == null) {
//				response.getErrors().add("Register not found id:" + id);
//				return ResponseEntity.badRequest().body(response);
//			}
//			response.setData(user);
//			return ResponseEntity.ok(response);
//		}
////		
//		@DeleteMapping(value = "/{id}")
//		@PreAuthorize("hasAnyRole('ADMIN')")
//		public ResponseEntity<Response<String>> delete(@PathVariable("id") String id) {
//			Response<String> response = new Response<String>();
//			User user = userService.findById(id);
//			if (user == null) {
//				response.getErrors().add("Register not found id:" + id);
//				return ResponseEntity.badRequest().body(response);
//			}
//			userService.delete(id);
//			return ResponseEntity.ok(new Response<String>());
//		}
//		
		
//		@GetMapping(value = "{page}/{count}")
//		@PreAuthorize("hasAnyRole('ADMIN')")
//	    public  ResponseEntity<Response<Page<User>>> findAll(@PathVariable int page, @PathVariable int count) {
//			Response<Page<User>> response = new Response<Page<User>>();
//			Page<User> users = userService.findAll(page, count);
//
//			response.setData(users);
//			return ResponseEntity.ok(response);
//	    }
//		
//		@GetMapping(value = "/all")
//		@PreAuthorize("hasAnyRole('ADMIN')")
//	    public  ResponseEntity<Response<Page<User>>> findAll() {
//			Response<Page<User>> response = new Response<Page<User>>();
//			//Page<User> users = userService.findAll(page, count);
//			Page<User> users = userService.findAll(0,1);
//			response.setData(users);
//			return ResponseEntity.ok(response);
//	    }
//		



		
}
