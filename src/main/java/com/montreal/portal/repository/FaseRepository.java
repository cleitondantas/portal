package com.montreal.portal.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.montreal.portal.entity.Fase;

public interface FaseRepository extends JpaRepository<Fase,Integer>{

	Iterable<Fase> findByNumfase(Integer numfase);

	

	
}
