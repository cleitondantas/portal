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
@Table(name = "TB_ANALISE")
public class Analise  implements Serializable{

	
	/**
	 * 
	 */
	private static final long serialVersionUID = 3830211136118428623L;
	
	@Id
	@Column(name="COD_ANALISE")	
	private Integer codAnalise;
	
	@Column(name="COD_CADASTRO")	
	private Integer codCadastro;
	
	@Column(name="data_pasta_mae")
	private Date dataPastaMae;
	
	@Column(name="data_emissao")
	private Date dataEmissao;
	
	@Column(name="data_assinatura")
	private Date dataAssinatura;
	
	@Column(name="cod_status_analise")
	private Integer codStatusAnalise;
	
	@Column(name="cod_sub_status_analise")
	private Integer codSubStatusAnalise;
	
	@Column(name="cod_simulacao")
	private Integer codSimulacao;
	
	@Column(name="obs")
	private String obs;
	
	@Column(name="cod_usuario")
	private Long codUsuario;
	
	@Column(name="data_simulacao")
	private Date dataSimulacao;


	public Integer getCodAnalise() {
		return codAnalise;
	}

	public void setCodAnalise(Integer codAnalise) {
		this.codAnalise = codAnalise;
	}

	public Integer getCodCadastro() {
		return codCadastro;
	}

	public void setCodCadastro(Integer codCadastro) {
		this.codCadastro = codCadastro;
	}

	public Date getDataPastaMae() {
		return dataPastaMae;
	}

	public void setDataPastaMae(Date dataPastaMae) {
		this.dataPastaMae = dataPastaMae;
	}

	public Date getDataEmissao() {
		return dataEmissao;
	}

	public void setDataEmissao(Date dataEmissao) {
		this.dataEmissao = dataEmissao;
	}

	public Date getDataAssinatura() {
		return dataAssinatura;
	}

	public void setDataAssinatura(Date dataAssinatura) {
		this.dataAssinatura = dataAssinatura;
	}

	public Integer getCodStatusAnalise() {
		return codStatusAnalise;
	}

	public void setCodStatusAnalise(Integer codStatusAnalise) {
		this.codStatusAnalise = codStatusAnalise;
	}

	public Integer getCodSubStatusAnalise() {
		return codSubStatusAnalise;
	}

	public void setCodSubStatusAnalise(Integer codSubStatusAnalise) {
		this.codSubStatusAnalise = codSubStatusAnalise;
	}

	public Integer getCodSimulacao() {
		return codSimulacao;
	}

	public void setCodSimulacao(Integer codSimulacao) {
		this.codSimulacao = codSimulacao;
	}

	public String getObs() {
		return obs;
	}

	public void setObs(String obs) {
		this.obs = obs;
	}

	public Long getCodUsuario() {
		return codUsuario;
	}

	public void setCodUsuario(Long codUsuario) {
		this.codUsuario = codUsuario;
	}

	public Date getDataSimulacao() {
		return dataSimulacao;
	}

	public void setDataSimulacao(Date dataSimulacao) {
		this.dataSimulacao = dataSimulacao;
	}
	
	
	
	
}
