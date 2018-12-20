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
	private Integer codOriginacao;
	
	@Column(name="DESC_ORIGINACAO")
	private String descOriginacao;

	public Integer getCodOriginacao() {
		return codOriginacao;
	}

	public void setCodOriginacao(Integer codOriginacao) {
		this.codOriginacao = codOriginacao;
	}

	public String getDescOriginacao() {
		return descOriginacao;
	}

	public void setDescOriginacao(String descOriginacao) {
		this.descOriginacao = descOriginacao;
	}


	
	
	
}
