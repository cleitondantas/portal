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
public class Incorporadoras implements Serializable{

	
	/**
	 * 
	 */
	private static final long serialVersionUID = -7293123334070345405L;
	
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="cod_incorporadora")
	private Integer codIncorporadora;
	
	
	@Column(name="desc_incorporadora")
	private String descIncorporadora;


	public Integer getCodIncorporadora() {
		return codIncorporadora;
	}


	public void setCodIncorporadora(Integer codIncorporadora) {
		this.codIncorporadora = codIncorporadora;
	}


	public String getDescIncorporadora() {
		return descIncorporadora;
	}


	public void setDescIncorporadora(String descIncorporadora) {
		this.descIncorporadora = descIncorporadora;
	}
	
	
	
}
