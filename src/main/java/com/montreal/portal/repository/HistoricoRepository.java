package com.montreal.portal.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.montreal.portal.entity.Historico;

public interface HistoricoRepository extends JpaRepository<Historico,Integer>{

	Iterable<Historico> findByCodcadastro(Integer codcadastro);
	
	

}
