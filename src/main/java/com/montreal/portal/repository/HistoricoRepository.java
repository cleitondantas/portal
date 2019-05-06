package com.montreal.portal.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import com.montreal.portal.entity.Historico;

public interface HistoricoRepository extends JpaRepository<Historico,Integer>{

	
	@Query("select h from Historico h where h.codcadastro = :codcadastro order by h.datahistorico desc")
	Iterable<Historico> findByCodcadastro(Integer codcadastro);
	
	
}
