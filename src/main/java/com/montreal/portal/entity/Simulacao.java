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
	

	@Column(name="correspondente")
	private String correspondente;
	
	@Column(name="cod_modalidade_simulacao")
	private Integer codmodalidadesimulacao;
	
	@Column(name="obs")
	private String obs;
	
	@Column(name="cod_sicaq")
	private Integer codsicaq;

	@Column(name="cod_tipo_amortizacao")
	private Integer codtipoamortizacao;
	
	@Column(name="valor_avaliacao", precision=16, scale=2)
	private BigDecimal valoravaliacao;
	
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
	private Integer  prazofinanciamento;
	
	@Column(name="valor_primeira_parcela", precision=16, scale=2)
	private BigDecimal valorprimeiraparcela;
	
	@Column(name="valor_compra_venda", precision=16, scale=2)
	private BigDecimal valorcompravenda;
	
	@Column(name="saldo_devedor", precision=16, scale=2)
	private BigDecimal saldodevedor;
	
	@Column(name="cod_status_simulacao")
	private Integer codstatussimulacao;

	@Column(name="cod_usuario")
	private Long codusuario;

	@Column(name="data_envio_banco")
	private Date dataenviobanco;
	
	@Column(name="valor_credito",precision=16, scale=2)
	private BigDecimal valorcredito;
	
	@Column(name="taxadejuros",precision=16, scale=2)
	private BigDecimal taxadejuros;
	
	@Column(name="simulacaoselecionado")
	private Boolean simulacaoselecionado;
	
	@Column(name="dt_atividade",updatable = false)
	private Date dtatividade;
	
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

	public Integer getPrazofinanciamento() {
		return prazofinanciamento;
	}

	public void setPrazofinanciamento(Integer prazofinanciamento) {
		this.prazofinanciamento = prazofinanciamento;
	}

	public Integer getCodstatussimulacao() {
		return codstatussimulacao;
	}

	public void setCodstatussimulacao(Integer codstatussimulacao) {
		this.codstatussimulacao = codstatussimulacao;
	}


	public Long getCodusuario() {
		return codusuario;
	}

	public void setCodusuario(Long codusuario) {
		this.codusuario = codusuario;
	}

	public BigDecimal getSaldodevedor() {
		return saldodevedor;
	}

	public void setSaldodevedor(BigDecimal saldodevedor) {
		this.saldodevedor = saldodevedor;
	}

	public Date getDataenviobanco() {
		return dataenviobanco;
	}

	public void setDataenviobanco(Date dataenviobanco) {
		this.dataenviobanco = dataenviobanco;
	}

	public BigDecimal getValorcredito() {
		return valorcredito;
	}

	public void setValorcredito(BigDecimal valorcredito) {
		this.valorcredito = valorcredito;
	}



	public BigDecimal getValorprimeiraparcela() {
		return valorprimeiraparcela;
	}

	public void setValorprimeiraparcela(BigDecimal valorprimeiraparcela) {
		this.valorprimeiraparcela = valorprimeiraparcela;
	}

	public BigDecimal getTaxadejuros() {
		return taxadejuros;
	}

	public void setTaxadejuros(BigDecimal taxadejuros) {
		this.taxadejuros = taxadejuros;
	}

	public BigDecimal getValorcompravenda() {
		return valorcompravenda;
	}

	public void setValorcompravenda(BigDecimal valorcompravenda) {
		this.valorcompravenda = valorcompravenda;
	}

	public BigDecimal getValoravaliacao() {
		return valoravaliacao;
	}

	public void setValoravaliacao(BigDecimal valoravaliacao) {
		this.valoravaliacao = valoravaliacao;
	}

	public String getObs() {
		return obs;
	}

	public void setObs(String obs) {
		this.obs = obs;
	}

	public Boolean getSimulacaoselecionado() {
		return simulacaoselecionado;
	}

	public void setSimulacaoselecionado(Boolean simulacaoselecionado) {
		this.simulacaoselecionado = simulacaoselecionado;
	}

	public Date getDtatividade() {
		return dtatividade;
	}

	public void setDtatividade(Date dtatividade) {
		this.dtatividade = dtatividade;
	}

	
	
	
}
