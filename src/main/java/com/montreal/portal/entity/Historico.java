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
	
	@Column(name="DATA_HISTORICO")
	private Date datahistorico;

	@Column(name="COD_CADASTRO")	
	private Integer codcadastro;
	
	@Column(name="COD_USUARIO")
	private Integer codusuario;
	
	@Column(name="NUM_FASE")
	private Integer numfase;
	
	@Column(name="NUM_SINTESE")
	private Integer numsintese;

	@Column(name="DESCRICAO")	
	private String descricao;

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public Date getDatahistorico() {
		return datahistorico;
	}

	public void setDatahistorico(Date datahistorico) {
		this.datahistorico = datahistorico;
	}

	public Integer getCodcadastro() {
		return codcadastro;
	}

	public void setCodcadastro(Integer codcadastro) {
		this.codcadastro = codcadastro;
	}

	public Integer getCodusuario() {
		return codusuario;
	}

	public void setCodusuario(Integer codusuario) {
		this.codusuario = codusuario;
	}

	public Integer getNumfase() {
		return numfase;
	}

	public void setNumfase(Integer numfase) {
		this.numfase = numfase;
	}


	public Integer getNumsintese() {
		return numsintese;
	}

	public void setNumsintese(Integer numsintese) {
		this.numsintese = numsintese;
	}

	public String getDescricao() {
		return descricao;
	}

	public void setDescricao(String descricao) {
		this.descricao = descricao;
	}

	
}
