package com.montreal.portal.entity;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "TB_TIPO_AMORTIZACAO")
public class TipoAmortizacao implements Serializable{

	/**
	 * 
	 */
	private static final long serialVersionUID = 5493159991083977251L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="COD_TIPO_AMORTIZACAO")
	private Integer codtipoamortizacao;
	
	@Column(name="DESC_TIPO_AMORTIZACAO")
	private String desctipoamortizacao;

	public Integer getCodtipoamortizacao() {
		return codtipoamortizacao;
	}

	public void setCodtipoamortizacao(Integer codtipoamortizacao) {
		this.codtipoamortizacao = codtipoamortizacao;
	}

	public String getDesctipoamortizacao() {
		return desctipoamortizacao;
	}

	public void setDesctipoamortizacao(String desctipoamortizacao) {
		this.desctipoamortizacao = desctipoamortizacao;
	}

	
	
}
