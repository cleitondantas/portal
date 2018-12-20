package com.montreal.portal.entity;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "TB_SUB_STATUS_ANALISE")
public class SubStatusAnalise implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = -6001998312788140464L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="COD_SUB_STATUS_ANALISE")	
	private Integer codSubStatusAnalise;
	
	@Column(name="cod_status_analise")	
	private Integer codStatusAnalise;
	
	@Column(name="DESC_SUB_STATUS_ANALISE")	
	private String descSubStatusAnalise;

	
	
	public Integer getCodSubStatusAnalise() {
		return codSubStatusAnalise;
	}

	public void setCodSubStatusAnalise(Integer codSubStatusAnalise) {
		this.codSubStatusAnalise = codSubStatusAnalise;
	}

	public Integer getCodStatusAnalise() {
		return codStatusAnalise;
	}

	public void setCodStatusAnalise(Integer codStatusAnalise) {
		this.codStatusAnalise = codStatusAnalise;
	}

	public String getDescSubStatusAnalise() {
		return descSubStatusAnalise;
	}

	public void setDescSubStatusAnalise(String descSubStatusAnalise) {
		this.descSubStatusAnalise = descSubStatusAnalise;
	}
	
	
	
}
