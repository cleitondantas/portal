package com.montreal.portal.entity;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;


@Entity
@Table(name = "TB_SICAQ")
public class Sicaq implements Serializable{

	
	/**
	 * 
	 */
	private static final long serialVersionUID = -2511420815175981604L;
	
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="COD_SICAQ")
	private Integer codSicaq;
	
	@Column(name="DESC_SICAQ")
	private String descSicaq;

	public Integer getCodSicaq() {
		return codSicaq;
	}

	public void setCodSicaq(Integer codSicaq) {
		this.codSicaq = codSicaq;
	}

	public String getDescSicaq() {
		return descSicaq;
	}

	public void setDescSicaq(String descSicaq) {
		this.descSicaq = descSicaq;
	}
	
	
	
}
