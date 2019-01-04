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
	private Integer codsubstatusanalise;
	
	@Column(name="cod_status_analise")	
	private Integer codstatusanalise;
	
	@Column(name="DESC_SUB_STATUS_ANALISE")	
	private String descsubstatusanalise;

	public Integer getCodsubstatusanalise() {
		return codsubstatusanalise;
	}

	public void setCodsubstatusanalise(Integer codsubstatusanalise) {
		this.codsubstatusanalise = codsubstatusanalise;
	}

	public Integer getCodstatusanalise() {
		return codstatusanalise;
	}

	public void setCodstatusanalise(Integer codstatusanalise) {
		this.codstatusanalise = codstatusanalise;
	}

	public String getDescsubstatusanalise() {
		return descsubstatusanalise;
	}

	public void setDescsubstatusanalise(String descsubstatusanalise) {
		this.descsubstatusanalise = descsubstatusanalise;
	}

	
	
	
}
