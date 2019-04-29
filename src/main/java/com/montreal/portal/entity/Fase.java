package com.montreal.portal.entity;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "TB_FASES")
public class Fase implements Serializable{

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="ID")	
	private Integer id;
	
	@Column(name="FASE")
	private String fase;
	
	@Column(name="NUM_FASE")	
	private Integer numfase;
	
	
	

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getFase() {
		return fase;
	}

	public void setFase(String fase) {
		this.fase = fase;
	}

	public Integer getNumfase() {
		return numfase;
	}

	public void setNumfase(Integer numfase) {
		this.numfase = numfase;
	}
	
	

}
