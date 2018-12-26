package com.montreal.portal.entity;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "TB_INCORPORADORAS")
public class Incorporadora implements Serializable{

	
	/**
	 * 
	 */
	private static final long serialVersionUID = -7293123334070345405L;
	
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="cod_incorporadora")
	private Integer codincorporadora;
	
	
	@Column(name="desc_incorporadora")
	private String descincorporadora;


	public Integer getCodincorporadora() {
		return codincorporadora;
	}


	public void setCodincorporadora(Integer codincorporadora) {
		this.codincorporadora = codincorporadora;
	}


	public String getDescincorporadora() {
		return descincorporadora;
	}


	public void setDescincorporadora(String descincorporadora) {
		this.descincorporadora = descincorporadora;
	}


	
	
}
