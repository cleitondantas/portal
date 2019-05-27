package com.montreal.portal.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.montreal.portal.entity.Cliente;


public interface ClientesRepository extends JpaRepository<Cliente, String>{

	
	@Query("select c from Cliente c where c.nomecliente like %:nomecliente%")
	Iterable<Cliente> findAllNomeCliente(@Param("nomecliente") String nomecliente);
	
	@Query("select c from Cliente c where c.cpfcnpj like %:cpfcnpj%")
	Iterable<Cliente> findAllCPFCliente(@Param("cpfcnpj") String cpfcnpj);
}
