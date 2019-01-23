package com.montreal.portal.entity;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "TB_ANALISE")
public class Analise  implements Serializable{
	/**
	 * 
	 */
	private static final long serialVersionUID = 3830211136118428623L;
	
	@Id
	@Column(name="COD_ANALISE")	
	private Integer codanalise;
	
	@Column(name="COD_CADASTRO")
	private Integer codcadastro;
	
	@Column(name="data_pasta_mae")
	private Date datapastamae;
	
	@Column(name="data_emissao")
	private Date dataemissao;
	
	@Column(name="data_assinatura")
	private Date dataassinatura;
	
	@Column(name="cod_status_analise")
	private Integer codstatusanalise;
	
	@Column(name="cod_sub_status_analise")
	private Integer codsubstatusanalise;
	
	@Column(name="cod_simulacao")
	private Integer codsimulacao;
	
	@Column(name="obs")
	private String obs;
	
	@Column(name="cod_usuario")
	private Long codusuario;
	
	@Column(name="data_simulacao")
	private Date datasimulacao;

	public Integer getCodanalise() {
		return codanalise;
	}

	public void setCodanalise(Integer codanalise) {
		this.codanalise = codanalise;
	}

	public Integer getCodcadastro() {
		return codcadastro;
	}

	public void setCodcadastro(Integer codcadastro) {
		this.codcadastro = codcadastro;
	}

	public Date getDatapastamae() {
		return datapastamae;
	}

	public void setDatapastamae(Date datapastamae) {
		this.datapastamae = datapastamae;
	}

	public Date getDataemissao() {
		return dataemissao;
	}

	public void setDataemissao(Date dataemissao) {
		this.dataemissao = dataemissao;
	}

	public Date getDataassinatura() {
		return dataassinatura;
	}

	public void setDataassinatura(Date dataassinatura) {
		this.dataassinatura = dataassinatura;
	}

	public Integer getCodstatusanalise() {
		return codstatusanalise;
	}

	public void setCodstatusanalise(Integer codstatusanalise) {
		this.codstatusanalise = codstatusanalise;
	}

	public Integer getCodsubstatusanalise() {
		return codsubstatusanalise;
	}

	public void setCodsubstatusanalise(Integer codsubstatusanalise) {
		this.codsubstatusanalise = codsubstatusanalise;
	}

	public Integer getCodsimulacao() {
		return codsimulacao;
	}

	public void setCodsimulacao(Integer codsimulacao) {
		this.codsimulacao = codsimulacao;
	}

	public String getObs() {
		return obs;
	}

	public void setObs(String obs) {
		this.obs = obs;
	}

	public Long getCodusuario() {
		return codusuario;
	}

	public void setCodusuario(Long codusuario) {
		this.codusuario = codusuario;
	}

	public Date getDatasimulacao() {
		return datasimulacao;
	}

	public void setDatasimulacao(Date datasimulacao) {
		this.datasimulacao = datasimulacao;
	}


	
}
