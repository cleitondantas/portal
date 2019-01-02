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
	private Integer codsicaq;
	
	@Column(name="DESC_SICAQ")
	private String descsicaq;

	public Integer getCodsicaq() {
		return codsicaq;
	}

	public void setCodsicaq(Integer codsicaq) {
		this.codsicaq = codsicaq;
	}

	public String getDescsicaq() {
		return descsicaq;
	}

	public void setDescsicaq(String descsicaq) {
		this.descsicaq = descsicaq;
	}

	
	
}
