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
	private String cnpjspe;
	
	
	@Column(name="cod_incorporadora")
	private Integer codincorporadora;
	
	
	@Column(name="desc_spe")
	private String descspe;


	public String getCnpjspe() {
		return cnpjspe;
	}


	public void setCnpjspe(String cnpjspe) {
		this.cnpjspe = cnpjspe;
	}


	public Integer getCodincorporadora() {
		return codincorporadora;
	}


	public void setCodincorporadora(Integer codincorporadora) {
		this.codincorporadora = codincorporadora;
	}


	public String getDescspe() {
		return descspe;
	}


	public void setDescspe(String descspe) {
		this.descspe = descspe;
	}

	
	
	
	
	
}
