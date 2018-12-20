package com.montreal.portal.entity;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;


@Entity
@Table(name = "TB_SPE")
public class Spe implements Serializable{

	/**
	 * 
	 */
	private static final long serialVersionUID = -7324581673805033192L;

	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="cnpj_spe")
	private String cnpjSpe;
	
	
	@Column(name="cod_incorporadora")
	private Integer codIncorporadora;
	
	
	@Column(name="desc_spe")
	private String descSpe;


	public String getCnpjSpe() {
		return cnpjSpe;
	}


	public void setCnpjSpe(String cnpjSpe) {
		this.cnpjSpe = cnpjSpe;
	}


	public Integer getCodIncorporadora() {
		return codIncorporadora;
	}


	public void setCodIncorporadora(Integer codIncorporadora) {
		this.codIncorporadora = codIncorporadora;
	}


	public String getDescSpe() {
		return descSpe;
	}


	public void setDescSpe(String descSpe) {
		this.descSpe = descSpe;
	}
	
	
	
	
	
	
	
}
