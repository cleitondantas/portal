package com.montreal.portal.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.montreal.portal.entity.Sintese;

public interface SinteseRepository extends JpaRepository<Sintese,Integer>{
	
	
	@Query("select s from Sintese s where s.numfase = :numfase and s.numsistese =:numsintese")
	Iterable<Sintese> findBySintese(Integer numsintese,Integer numfase);

	
	
}
