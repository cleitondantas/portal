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
	private Integer codSimulacao;
	

	@Column(name="cod_cadastro")
	private Integer codCadastro;
	
	@Column(name="cod_instituicao_financeira")
	private Integer codInstituicaoFinanceira;
	
	
	@Column(name="proposta_inst_financ")
	private String propostaInstFinanc;
	
	@Column(name="correspondente")
	private String correspondente;
	
	@Column(name="cod_modalidade_simulacao")
	private Integer codModalidadeSimulacao;
	
	@Column(name="cod_sicaq")
	private Integer codSicaq;

	@Column(name="cod_tipo_amortizacao")
	private Integer codTipoAmortizacao;
	
	@Column(name="valor_avaliacao_inst_financ", precision=16, scale=2)
	private BigDecimal valorAvaliacaoInstFinanc;
	
	@Column(name="valor_financiamento", precision=16, scale=2)
	private BigDecimal valorFinanciamento;
	
	@Column(name="valor_despesas_financiadas", precision=16, scale=2)
	private BigDecimal valorDespesasFinanciadas;	
	
	@Column(name="valor_subsidio", precision=16, scale=2)
	private BigDecimal valorSubsidio;	
	
	@Column(name="valor_fgts", precision=16, scale=2)
	private BigDecimal valorFgts;	
	
	@Column(name="valor_recursos_proprios", precision=16, scale=2)
	private BigDecimal valorRecursosProprios;

	@Column(name="prazo_financiamento")
	private String prazoFinanciamento;
	
	@Column(name="valor_parcela", precision=16, scale=2)
	private BigDecimal valorParcela;
	
	@Column(name="cod_status_simulacao")
	private Integer codStatusSimulacao;
	
	@Column(name="obs")
	private String obs;
	
	@Column(name="cod_usuario")
	private Long codUsuario;
	
	@Column(name="data_simulacao")
	private Date dataSimulacao;

	
	
	
	public Integer getCodSimulacao() {
		return codSimulacao;
	}

	public void setCodSimulacao(Integer codSimulacao) {
		this.codSimulacao = codSimulacao;
	}

	public Integer getCodCadastro() {
		return codCadastro;
	}

	public void setCodCadastro(Integer codCadastro) {
		this.codCadastro = codCadastro;
	}

	public Integer getCodInstituicaoFinanceira() {
		return codInstituicaoFinanceira;
	}

	public void setCodInstituicaoFinanceira(Integer codInstituicaoFinanceira) {
		this.codInstituicaoFinanceira = codInstituicaoFinanceira;
	}

	public String getPropostaInstFinanc() {
		return propostaInstFinanc;
	}

	public void setPropostaInstFinanc(String propostaInstFinanc) {
		this.propostaInstFinanc = propostaInstFinanc;
	}

	public String getCorrespondente() {
		return correspondente;
	}

	public void setCorrespondente(String correspondente) {
		this.correspondente = correspondente;
	}

	public Integer getCodModalidadeSimulacao() {
		return codModalidadeSimulacao;
	}

	public void setCodModalidadeSimulacao(Integer codModalidadeSimulacao) {
		this.codModalidadeSimulacao = codModalidadeSimulacao;
	}

	public Integer getCodSicaq() {
		return codSicaq;
	}

	public void setCodSicaq(Integer codSicaq) {
		this.codSicaq = codSicaq;
	}

	public Integer getCodTipoAmortizacao() {
		return codTipoAmortizacao;
	}

	public void setCodTipoAmortizacao(Integer codTipoAmortizacao) {
		this.codTipoAmortizacao = codTipoAmortizacao;
	}

	public BigDecimal getValorAvaliacaoInstFinanc() {
		return valorAvaliacaoInstFinanc;
	}

	public void setValorAvaliacaoInstFinanc(BigDecimal valorAvaliacaoInstFinanc) {
		this.valorAvaliacaoInstFinanc = valorAvaliacaoInstFinanc;
	}

	public BigDecimal getValorFinanciamento() {
		return valorFinanciamento;
	}

	public void setValorFinanciamento(BigDecimal valorFinanciamento) {
		this.valorFinanciamento = valorFinanciamento;
	}

	public BigDecimal getValorDespesasFinanciadas() {
		return valorDespesasFinanciadas;
	}

	public void setValorDespesasFinanciadas(BigDecimal valorDespesasFinanciadas) {
		this.valorDespesasFinanciadas = valorDespesasFinanciadas;
	}

	public BigDecimal getValorSubsidio() {
		return valorSubsidio;
	}

	public void setValorSubsidio(BigDecimal valorSubsidio) {
		this.valorSubsidio = valorSubsidio;
	}

	public BigDecimal getValorFgts() {
		return valorFgts;
	}

	public void setValorFgts(BigDecimal valorFgts) {
		this.valorFgts = valorFgts;
	}

	public BigDecimal getValorRecursosProprios() {
		return valorRecursosProprios;
	}

	public void setValorRecursosProprios(BigDecimal valorRecursosProprios) {
		this.valorRecursosProprios = valorRecursosProprios;
	}

	public String getPrazoFinanciamento() {
		return prazoFinanciamento;
	}

	public void setPrazoFinanciamento(String prazoFinanciamento) {
		this.prazoFinanciamento = prazoFinanciamento;
	}

	public BigDecimal getValorParcela() {
		return valorParcela;
	}

	public void setValorParcela(BigDecimal valorParcela) {
		this.valorParcela = valorParcela;
	}

	public Integer getCodStatusSimulacao() {
		return codStatusSimulacao;
	}

	public void setCodStatusSimulacao(Integer codStatusSimulacao) {
		this.codStatusSimulacao = codStatusSimulacao;
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
