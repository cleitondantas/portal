package com.montreal.portal.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.montreal.portal.entity.Analise;

public interface AnaliseRepositoy  extends JpaRepository<Analise, Integer>{
	
	@Query("select c from Analise c where c.codcadastro = :codcadastro")
	Iterable<Analise> findCadastroWithPartOfFid(@Param("codcadastro") Integer codcadastro);

}
