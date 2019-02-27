	package com.montreal.portal.entity;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "TB_ORIGINACAO")
public class Originacao implements Serializable{

	/**
	 * 
	 */
	private static final long serialVersionUID = 8217427685481147063L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="COD_ORIGINACAO")
	private Integer codoriginacao;
	
	@Column(name="DESC_ORIGINACAO")
	private String descoriginacao;

	public Integer getCodoriginacao() {
		return codoriginacao;
	}

	public void setCodoriginacao(Integer codoriginacao) {
		this.codoriginacao = codoriginacao;
	}

	public String getDescoriginacao() {
		return descoriginacao;
	}

	public void setDescoriginacao(String descoriginacao) {
		this.descoriginacao = descoriginacao;
	}

	
	
}
