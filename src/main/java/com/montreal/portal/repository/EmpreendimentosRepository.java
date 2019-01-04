package com.montreal.portal.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.montreal.portal.entity.Empreendimento;

public interface EmpreendimentosRepository extends JpaRepository<Empreendimento,Integer> {

}
