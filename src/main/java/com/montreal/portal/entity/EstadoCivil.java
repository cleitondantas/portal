package com.montreal.portal.entity;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "TB_ESTADO_CIVIL")
public class EstadoCivil implements Serializable{

	
	/**
	 * 
	 */
	private static final long serialVersionUID = -5823213694414566930L;
	
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="cod_estado_civil")
	private Integer codestadocivil;
	
	@Column(name="desc_estado_civil")
	private String descestadocivil;

	public Integer getCodestadocivil() {
		return codestadocivil;
	}

	public void setCodestadocivil(Integer codestadocivil) {
		this.codestadocivil = codestadocivil;
	}

	public String getDescestadocivil() {
		return descestadocivil;
	}

	public void setDescestadocivil(String descestadocivil) {
		this.descestadocivil = descestadocivil;
	}


	
	
	
	
}
