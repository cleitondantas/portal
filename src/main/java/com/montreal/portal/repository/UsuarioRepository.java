package com.montreal.portal.repository;



import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.montreal.portal.entity.Usuario;


	public interface UsuarioRepository extends JpaRepository<Usuario, Long> {
		Usuario findByNome(String nome);
		Usuario findByEmail(String email);
		Usuario findByLogin(String login);
		Usuario findByCodUsuario(Long codUsuario);
		
		@Query("SELECT u.login FROM Usuario u WHERE u.login LIKE CONCAT('%',:username,'%')")
		List<String> findUsuariosWithPartOfLogin(@Param("username") String login);
	}

