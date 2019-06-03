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
	
	Usuario findByCodUsuario(Integer  codUsuario);
	
	@Query("SELECT u.login FROM Usuario u WHERE u.login LIKE CONCAT('%',:username,'%')")
	List<String> findUsuariosWithPartOfLogin(@Param("username") String login);
	
	
	@Query(value = "SELECT * FROM TB_USUARIOS_WEB  WHERE cod_usuario = (SELECT MAX(cod_usuario) FROM TB_USUARIOS_WEB)",nativeQuery = true)
	List<Usuario> maxxCodUsuario();
			
			
	Usuario save(Usuario usuario);
	
	List<Usuario> save(List<Usuario> usuarios);
	
	Optional<Usuario> findById(Long id);
	
	void delete(Long id);
	
	List<Usuario> findAll();
}
