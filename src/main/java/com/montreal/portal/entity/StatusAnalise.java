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
	private Integer codStatusAnalise;
	
	@Column(name="DESC_STATUS_ANALISE")
	private String descStatusAnalise;

	public Integer getCodStatusAnalise() {
		return codStatusAnalise;
	}

	public void setCodStatusAnalise(Integer codStatusAnalise) {
		this.codStatusAnalise = codStatusAnalise;
	}

	public String getDescStatusAnalise() {
		return descStatusAnalise;
	}

	public void setDescStatusAnalise(String descStatusAnalise) {
		this.descStatusAnalise = descStatusAnalise;
	}
	
	
	
	
}
