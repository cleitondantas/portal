package com.montreal.portal.entity;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "TB_HISTORICO")
public class Historico implements Serializable{
	
	/**
	 * 
	 */
	private static final long serialVersionUID = 3248595328443301313L;
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;

	@Column(name="COD_CADASTRO")	
	private Integer codcadastro;
	
	@Column(name="DESC_ATIVIDADE")	
	private String descatividade;
	
	@Column(name="desc_sub_atividade")	
	private String descsubatividade;
	
	@Column(name="cod_usuario")
	private Long codusuario;
	
	@Column(name="data_historico")
	private Date datahistorico;

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public Integer getCodcadastro() {
		return codcadastro;
	}

	public void setCodcadastro(Integer codcadastro) {
		this.codcadastro = codcadastro;
	}

	public String getDescatividade() {
		return descatividade;
	}

	public void setDescatividade(String descatividade) {
		this.descatividade = descatividade;
	}

	public String getDescsubatividade() {
		return descsubatividade;
	}

	public void setDescsubatividade(String descsubatividade) {
		this.descsubatividade = descsubatividade;
	}

	public Long getCodusuario() {
		return codusuario;
	}

	public void setCodusuario(Long codusuario) {
		this.codusuario = codusuario;
	}

	public Date getDatahistorico() {
		return datahistorico;
	}

	public void setDatahistorico(Date datahistorico) {
		this.datahistorico = datahistorico;
	}

	
}
