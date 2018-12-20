package com.montreal.portal.entity;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "TB_INSTITUICAO_FINANCEIRA")
public class InstituicaoFinanceira  implements Serializable{

	/**
	 * 
	 */
	private static final long serialVersionUID = 1994265105517934388L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="COD_INSTITUICAO_FINANCEIRA")
	private Integer codInstituicaoFinanceira;
	
	@Column(name="DESC_INSTITUICAO_FINANCEIRA")
	private String descInstituicaoFinanceira;

	public Integer getCodInstituicaoFinanceira() {
		return codInstituicaoFinanceira;
	}

	public void setCodInstituicaoFinanceira(Integer codInstituicaoFinanceira) {
		this.codInstituicaoFinanceira = codInstituicaoFinanceira;
	}

	public String getDescInstituicaoFinanceira() {
		return descInstituicaoFinanceira;
	}

	public void setDescInstituicaoFinanceira(String descInstituicaoFinanceira) {
		this.descInstituicaoFinanceira = descInstituicaoFinanceira;
	}
	
	
	
	
}
