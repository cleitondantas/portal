package com.montreal.portal.entity;

import java.io.Serializable;
import java.util.Date;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.Table;

@Entity
@Table(name = "TB_ANALISE")
public class Analise  implements Serializable{
	/**
	 * 
	 */
	private static final long serialVersionUID = 3830211136118428623L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="COD_ANALISE")	
	private Integer codanalise;
	
	@Column(name="COD_CADASTRO")
	private Integer codcadastro;
	
	@Column(name="cod_instituicao_financeira")
	private Integer codinstituicaofinanceira; // CODIGO (ID) DO QUAL O USUARIO SELECIONOU PARA REALIZAR O FINANCIAMENTO
	
	@Column(name="numero_cadastro_incorporadora_fid")
	private Integer numerocadastroincorporadorafid;
	
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


	
	@Column(name="cod_usuario")
	private Long codusuario;
	
	@Column(name="data_simulacao")
	private Date datasimulacao;
	
	@Column(name="dt_atividade")
	private Date dtatividade;
	
	@ManyToMany(cascade = {CascadeType.ALL}, fetch = FetchType.EAGER)
	@JoinTable(name = "tb_relac_analise_simulacao", 
	joinColumns = @JoinColumn(name = "cod_analise", referencedColumnName = "cod_analise"),
	inverseJoinColumns = @JoinColumn(name = "cod_simulacao", referencedColumnName = "cod_simulacao"))
 //   @JsonIdentityInfo(generator = com.fasterxml.jackson.annotation.ObjectIdGenerators.PropertyGenerator.class, property = "id")
	private List<Simulacao> simulacoes;
	

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


	public Integer getCodinstituicaofinanceira() {
		return codinstituicaofinanceira;
	}

	public void setCodinstituicaofinanceira(Integer codinstituicaofinanceira) {
		this.codinstituicaofinanceira = codinstituicaofinanceira;
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

	public List<Simulacao> getSimulacoes() {
		return simulacoes;
	}

	public void setSimulacoes(List<Simulacao> simulacoes) {
		this.simulacoes = simulacoes;
	}

	public Date getDtatividade() {
		return dtatividade;
	}

	public void setDtatividade(Date dtatividade) {
		this.dtatividade = dtatividade;
	}

	public Integer getNumerocadastroincorporadorafid() {
		return numerocadastroincorporadorafid;
	}

	public void setNumerocadastroincorporadorafid(Integer numerocadastroincorporadorafid) {
		this.numerocadastroincorporadorafid = numerocadastroincorporadorafid;
	}


	
}
