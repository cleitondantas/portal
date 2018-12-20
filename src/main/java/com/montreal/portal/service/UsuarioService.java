package com.montreal.portal.service;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Component;

import com.montreal.portal.entity.Usuario;

@Component
public interface UsuarioService {
	
	
	Usuario findByEmail(String email);
	
	Usuario findByNome(String nome);
	//@Cacheable("usuarios")
	Usuario findByLogin(String nome);
	
	@Query("SELECT u.login FROM Usuario u WHERE u.login LIKE CONCAT('%',:username,'%')")
	List<String> findUsuariosWithPartOfLogin(@Param("username") String login);
	
	Usuario save(Usuario usuario);
	
	List<Usuario> save(List<Usuario> usuarios);
	
	Optional<Usuario> findById(Long id);
	
	void delete(Long id);
	
	List<Usuario> findAll();
}
