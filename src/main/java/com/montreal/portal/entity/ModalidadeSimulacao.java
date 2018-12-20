package com.montreal.portal.entity;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;


@Entity
@Table(name = "TB_MODALIDADE_SIMULACAO")
public class ModalidadeSimulacao  implements Serializable{

	/**
	 * 
	 */
	private static final long serialVersionUID = -9074947909556301401L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="COD_MODALIDADE_SIMULACAO")
	private Integer codModalidadeSimulacao;
	
	@Column(name="DESC_MODALIDADE_SIMULACAO")
	private String descModalidadeSimulacao;

	public Integer getCodModalidadeSimulacao() {
		return codModalidadeSimulacao;
	}

	public void setCodModalidadeSimulacao(Integer codModalidadeSimulacao) {
		this.codModalidadeSimulacao = codModalidadeSimulacao;
	}

	public String getDescModalidadeSimulacao() {
		return descModalidadeSimulacao;
	}

	public void setDescModalidadeSimulacao(String descModalidadeSimulacao) {
		this.descModalidadeSimulacao = descModalidadeSimulacao;
	}
	
	
	
	
}
