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
		Usuario findByCodUsuario(Integer codUsuario);
		
		@Query("SELECT u.login FROM Usuario u WHERE u.login LIKE CONCAT('%',:username,'%')")
		List<String> findUsuariosWithPartOfLogin(@Param("username") String login);
		
		@Query("FROM Usuario u WHERE u.nome LIKE CONCAT('%',:nome,'%')")
		List<Usuario> findUsuariosWithPartOfName(@Param("nome") String nome);
		
		@Query("FROM Usuario u WHERE u.login LIKE CONCAT('%',:login,'%')")
		List<Usuario> findUsuariosWithPartOfLoginAllParans(@Param("login") String login);
		
		
		@Query(value = "SELECT * FROM TB_USUARIOS_WEB  WHERE cod_usuario = (SELECT MAX(cod_usuario) FROM TB_USUARIOS_WEB)",nativeQuery = true)
		List<Usuario> maxxCodUsuario();
	}

