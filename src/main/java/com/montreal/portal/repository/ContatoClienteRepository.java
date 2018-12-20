package com.montreal.portal.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.montreal.portal.entity.Contato;

public interface ContatoClienteRepository extends JpaRepository<Contato,Long> {
	
	

}
