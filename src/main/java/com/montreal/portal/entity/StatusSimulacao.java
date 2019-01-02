package com.montreal.portal.entity;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "TB_STATUS_SIMULACAO")
public class StatusSimulacao implements Serializable{

	/**
	 * 
	 */
	private static final long serialVersionUID = 1350241401916292727L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="COD_STATUS_SIMULACAO")
	private Integer codstatussimulacao;
	
	@Column(name="DESC_STATUS_SIMULACAO")
	private String descstatussimulacao;

	public Integer getCodstatussimulacao() {
		return codstatussimulacao;
	}

	public void setCodstatussimulacao(Integer codstatussimulacao) {
		this.codstatussimulacao = codstatussimulacao;
	}

	public String getDescstatussimulacao() {
		return descstatussimulacao;
	}

	public void setDescstatussimulacao(String descstatussimulacao) {
		this.descstatussimulacao = descstatussimulacao;
	}

	
	
	
	
	
}
