package com.montreal.portal.entity;

import java.io.Serializable;
import java.math.BigDecimal;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;


@Entity
@Table(name = "TB_SIMULACAO")
public class Simulacao implements Serializable{

	/**
	 * 
	 */
	private static final long serialVersionUID = -3719917479504068122L;


	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="cod_simulacao")
	private Integer codsimulacao;
	

	@Column(name="cod_cadastro")
	private Integer codcadastro;
	
	@Column(name="cod_instituicao_financeira")
	private Integer codinstituicaofinanceira;
	
	
	@Column(name="proposta_inst_financ")
	private String propostainstfinanc;
	
	@Column(name="correspondente")
	private String correspondente;
	
	@Column(name="cod_modalidade_simulacao")
	private Integer codmodalidadesimulacao;
	
	@Column(name="cod_sicaq")
	private Integer codsicaq;

	@Column(name="cod_tipo_amortizacao")
	private Integer codtipoamortizacao;
	
	@Column(name="valor_avaliacao_inst_financ", precision=16, scale=2)
	private BigDecimal valoravaliacaoinstfinanc;
	
	@Column(name="valor_financiamento", precision=16, scale=2)
	private BigDecimal valorfinanciamento;
	
	@Column(name="valor_despesas_financiadas", precision=16, scale=2)
	private BigDecimal valordespesasfinanciadas;	
	
	@Column(name="valor_subsidio", precision=16, scale=2)
	private BigDecimal valorsubsidio;	
	
	@Column(name="valor_fgts", precision=16, scale=2)
	private BigDecimal valorfgts;	
	
	@Column(name="valor_recursos_proprios", precision=16, scale=2)
	private BigDecimal valorrecursosproprios;

	@Column(name="prazo_financiamento")
	private String prazofinanciamento;
	
	@Column(name="valor_parcela", precision=16, scale=2)
	private BigDecimal valorparcela;
	
	@Column(name="cod_status_simulacao")
	private Integer codstatussimulacao;
	
	@Column(name="obs")
	private String obs;
	
	@Column(name="cod_usuario")
	private Long codusuario;
	
	@Column(name="data_simulacao")
	private Date datasimulacao;

	public Integer getCodsimulacao() {
		return codsimulacao;
	}

	public void setCodsimulacao(Integer codsimulacao) {
		this.codsimulacao = codsimulacao;
	}

	public Integer getCodcadastro() {
		return codcadastro;
	}

	public void setCodcadastro(Integer codcadastro) {
		this.codcadastro = codcadastro;
	}

	public Integer getCodinstituicaofinanceira() {
		return codinstituicaofinanceira;
	}

	public void setCodinstituicaofinanceira(Integer codinstituicaofinanceira) {
		this.codinstituicaofinanceira = codinstituicaofinanceira;
	}

	public String getPropostainstfinanc() {
		return propostainstfinanc;
	}

	public void setPropostainstfinanc(String propostainstfinanc) {
		this.propostainstfinanc = propostainstfinanc;
	}

	public String getCorrespondente() {
		return correspondente;
	}

	public void setCorrespondente(String correspondente) {
		this.correspondente = correspondente;
	}

	public Integer getCodmodalidadesimulacao() {
		return codmodalidadesimulacao;
	}

	public void setCodmodalidadesimulacao(Integer codmodalidadesimulacao) {
		this.codmodalidadesimulacao = codmodalidadesimulacao;
	}

	public Integer getCodsicaq() {
		return codsicaq;
	}

	public void setCodsicaq(Integer codsicaq) {
		this.codsicaq = codsicaq;
	}

	public Integer getCodtipoamortizacao() {
		return codtipoamortizacao;
	}

	public void setCodtipoamortizacao(Integer codtipoamortizacao) {
		this.codtipoamortizacao = codtipoamortizacao;
	}

	public BigDecimal getValoravaliacaoinstfinanc() {
		return valoravaliacaoinstfinanc;
	}

	public void setValoravaliacaoinstfinanc(BigDecimal valoravaliacaoinstfinanc) {
		this.valoravaliacaoinstfinanc = valoravaliacaoinstfinanc;
	}

	public BigDecimal getValorfinanciamento() {
		return valorfinanciamento;
	}

	public void setValorfinanciamento(BigDecimal valorfinanciamento) {
		this.valorfinanciamento = valorfinanciamento;
	}

	public BigDecimal getValordespesasfinanciadas() {
		return valordespesasfinanciadas;
	}

	public void setValordespesasfinanciadas(BigDecimal valordespesasfinanciadas) {
		this.valordespesasfinanciadas = valordespesasfinanciadas;
	}

	public BigDecimal getValorsubsidio() {
		return valorsubsidio;
	}

	public void setValorsubsidio(BigDecimal valorsubsidio) {
		this.valorsubsidio = valorsubsidio;
	}

	public BigDecimal getValorfgts() {
		return valorfgts;
	}

	public void setValorfgts(BigDecimal valorfgts) {
		this.valorfgts = valorfgts;
	}

	public BigDecimal getValorrecursosproprios() {
		return valorrecursosproprios;
	}

	public void setValorrecursosproprios(BigDecimal valorrecursosproprios) {
		this.valorrecursosproprios = valorrecursosproprios;
	}

	public String getPrazofinanciamento() {
		return prazofinanciamento;
	}

	public void setPrazofinanciamento(String prazofinanciamento) {
		this.prazofinanciamento = prazofinanciamento;
	}

	public BigDecimal getValorparcela() {
		return valorparcela;
	}

	public void setValorparcela(BigDecimal valorparcela) {
		this.valorparcela = valorparcela;
	}

	public Integer getCodstatussimulacao() {
		return codstatussimulacao;
	}

	public void setCodstatussimulacao(Integer codstatussimulacao) {
		this.codstatussimulacao = codstatussimulacao;
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
