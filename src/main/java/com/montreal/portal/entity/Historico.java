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
	private Integer codCadastro;
	
	@Column(name="DESC_ATIVIDADE")	
	private String descAtividade;
	
	@Column(name="desc_sub_atividade")	
	private String descSubAtividade;
	
	@Column(name="cod_usuario")
	private Long codUsuario;
	
	@Column(name="data_historico")
	private Date dataHistorico;

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public Integer getCodCadastro() {
		return codCadastro;
	}

	public void setCodCadastro(Integer codCadastro) {
		this.codCadastro = codCadastro;
	}

	public String getDescAtividade() {
		return descAtividade;
	}

	public void setDescAtividade(String descAtividade) {
		this.descAtividade = descAtividade;
	}

	public String getDescSubAtividade() {
		return descSubAtividade;
	}

	public void setDescSubAtividade(String descSubAtividade) {
		this.descSubAtividade = descSubAtividade;
	}

	public Long getCodUsuario() {
		return codUsuario;
	}

	public void setCodUsuario(Long codUsuario) {
		this.codUsuario = codUsuario;
	}

	public Date getDataHistorico() {
		return dataHistorico;
	}

	public void setDataHistorico(Date dataHistorico) {
		this.dataHistorico = dataHistorico;
	}
	
	
	
}
