package com.montreal.portal.entity;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "TB_EMPREENDIMENTOS")
public class Empreendimentos implements Serializable{

	/**
	 * 
	 */
	private static final long serialVersionUID = -468019446744705758L;

	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="cod_empreendimento")
	private Integer codEmpreendimento;
	
	
	@Column(name="cnpj_spe")
	private String cnpjSpe;
	
	
	@Column(name="desc_empreendimento")
	private String descEmpreendimento;

	
	public String getCnpjSpe() {
		return cnpjSpe;
	}


	public void setCnpjSpe(String cnpjSpe) {
		this.cnpjSpe = cnpjSpe;
	}


	public String getDescEmpreendimento() {
		return descEmpreendimento;
	}


	public void setDescEmpreendimento(String descEmpreendimento) {
		this.descEmpreendimento = descEmpreendimento;
	}


	public Integer getCodEmpreendimento() {
		return codEmpreendimento;
	}


	public void setCodEmpreendimento(Integer codEmpreendimento) {
		this.codEmpreendimento = codEmpreendimento;
	}
	
	
	
	
}
