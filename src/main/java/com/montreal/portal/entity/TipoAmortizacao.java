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
	private Integer codTipoAmortizacao;
	
	@Column(name="DESC_TIPO_AMORTIZACAO")
	private String descTipoAmortizacao;

	public Integer getCodTipoAmortizacao() {
		return codTipoAmortizacao;
	}

	public void setCodTipoAmortizacao(Integer codTipoAmortizacao) {
		this.codTipoAmortizacao = codTipoAmortizacao;
	}

	public String getDescTipoAmortizacao() {
		return descTipoAmortizacao;
	}

	public void setDescTipoAmortizacao(String descTipoAmortizacao) {
		this.descTipoAmortizacao = descTipoAmortizacao;
	}
	
	
	
	
}
