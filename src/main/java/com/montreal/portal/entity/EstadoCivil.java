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
	private Integer codEstadoCivil;
	
	@Column(name="desc_estado_civil")
	private String descEstadoCivil;

	public Integer getCodEstadoCivil() {
		return codEstadoCivil;
	}

	public void setCodEstadoCivil(Integer codEstadoCivil) {
		this.codEstadoCivil = codEstadoCivil;
	}

	public String getDescEstadoCivil() {
		return descEstadoCivil;
	}

	public void setDescEstadoCivil(String descEstadoCivil) {
		this.descEstadoCivil = descEstadoCivil;
	}
	
	
	
	
}
