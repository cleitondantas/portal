package com.montreal.portal.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.montreal.portal.entity.DadosFaturamento;

public interface DadosFaturamentoRepository  extends JpaRepository<DadosFaturamento,Integer>{
	
	@Query("select c from DadosFaturamento c where c.codcadastro = :codcadastro")
	Iterable<DadosFaturamento> findAllDadosFaturamento(@Param("codcadastro") Integer codcadastro);

}
