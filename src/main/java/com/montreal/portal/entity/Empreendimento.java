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
public class Empreendimento implements Serializable{

	/**
	 * 
	 */
	private static final long serialVersionUID = -468019446744705758L;

	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="cod_empreendimento")
	private Integer codempreendimento;
	
	
	@Column(name="cnpj_spe")
	private String cnpjspe;
	
	
	@Column(name="desc_empreendimento")
	private String descempreendimento;


	public String getCnpjspe() {
		return cnpjspe;
	}


	public void setCnpjspe(String cnpjspe) {
		this.cnpjspe = cnpjspe;
	}


	public Integer getCodempreendimento() {
		return codempreendimento;
	}


	public void setCodempreendimento(Integer codempreendimento) {
		this.codempreendimento = codempreendimento;
	}


	public String getDescempreendimento() {
		return descempreendimento;
	}


	public void setDescempreendimento(String descempreendimento) {
		this.descempreendimento = descempreendimento;
	}



	
	
	
}
