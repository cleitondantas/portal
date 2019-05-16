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
	
	@Column(name="rua")
	private String rua;
	
	@Column(name="num")
	private String numemero;
	
	@Column(name="cidade")
	private String cidade;
	
	@Column(name="bairro")
	private String bairro;

	@Column(name="cep")
	private String cep;
	
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


	public String getRua() {
		return rua;
	}


	public void setRua(String rua) {
		this.rua = rua;
	}


	public String getNumemero() {
		return numemero;
	}


	public void setNumemero(String numemero) {
		this.numemero = numemero;
	}


	public String getCidade() {
		return cidade;
	}


	public void setCidade(String cidade) {
		this.cidade = cidade;
	}


	public String getBairro() {
		return bairro;
	}


	public void setBairro(String bairro) {
		this.bairro = bairro;
	}


	public String getCep() {
		return cep;
	}


	public void setCep(String cep) {
		this.cep = cep;
	}



	
	
	
}
