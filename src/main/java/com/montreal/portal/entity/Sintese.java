package com.montreal.portal.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "TB_SINTESES")
public class Sintese {

	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="ID")	
	private Integer id;
	
	@Column(name="SINTESE")
	private String sintese;
	
	@Column(name="NUM_SISTESE")	
	private Integer numsistese;
	
	@Column(name="num_fase")	
	private Integer numfase;

	
	
	
	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getSintese() {
		return sintese;
	}

	public void setSintese(String sintese) {
		this.sintese = sintese;
	}

	public Integer getNumsistese() {
		return numsistese;
	}

	public void setNumsistese(Integer numsistese) {
		this.numsistese = numsistese;
	}

	public Integer getNumfase() {
		return numfase;
	}

	public void setNumfase(Integer numfase) {
		this.numfase = numfase;
	}
	
	
	
	
}
