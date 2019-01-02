package com.montreal.portal.entity;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "TB_STATUS_ANALISE")
public class StatusAnalise implements Serializable{

	/**
	 * 
	 */
	private static final long serialVersionUID = -2376160724223842492L;
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="COD_STATUS_ANALISE")
	private Integer codstatusanalise;
	
	@Column(name="DESC_STATUS_ANALISE")
	private String descstatusanalise;

	public Integer getCodstatusanalise() {
		return codstatusanalise;
	}

	public void setCodstatusanalise(Integer codstatusanalise) {
		this.codstatusanalise = codstatusanalise;
	}

	public String getDescstatusanalise() {
		return descstatusanalise;
	}

	public void setDescstatusanalise(String descstatusanalise) {
		this.descstatusanalise = descstatusanalise;
	}


	
	
}
