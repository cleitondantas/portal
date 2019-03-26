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
@Table(name = "TB_DADOS_FATURAMENTO")
public class DadosFaturamento implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = -8731182374624580880L;

	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="COD_DADOS_FATURAMENTO")	
	private Integer coddadosfaturamento;
	
	@Column(name="cod_analise")
	private Integer codanalise;
	
	@Column(name="cod_cadastro")
	private Integer codcadastro;
	
	@Column(name="cpf_cnpj")
	private String cpfcnpj;
	
	@Column(name="razao_social_spe")
	private String razaosocialspe;
	
	@Column(name="parcela_1", precision=16, scale=2)
	private BigDecimal parcela1;
	
	@Column(name="nota_fiscal_1")
	private String notafiscal1;
	
	@Column(name="mes_faturamento_1")
	private Integer mesfaturamento1;
	
	@Column(name="parcela_2", precision=16, scale=2)
	private BigDecimal parcela2;
	
	@Column(name="nota_fiscal_2")
	private String notafiscal2;
	
	@Column(name="mes_faturamento_2")
	private Integer mesfaturamento2;
	
	@Column(name="mes_faturado")
	private Integer mesfaturado;
	
	@Column(name="total_recebido_incorporadora", precision=16, scale=2)
	private BigDecimal totalrecebidoincorporadora;
	
	@Column(name="recebimento_teorico_banco", precision=16, scale=2)
	private BigDecimal recebimentoteoricobanco;
	
	@Column(name="numero_nota_fiscal")
	private String numeronotafiscal;
	
	@Column(name="total_recebido", precision=16, scale=2)
	private BigDecimal totalrecebido;
	
	@Column(name="observacao")
	private String observacao;
	
	@Column(name="dt_atividade")
	private Date dtatividade;
	
	public Integer getCoddadosfaturamento() {
		return coddadosfaturamento;
	}

	public void setCoddadosfaturamento(Integer coddadosfaturamento) {
		this.coddadosfaturamento = coddadosfaturamento;
	}

	public Integer getCodanalise() {
		return codanalise;
	}

	public void setCodanalise(Integer codanalise) {
		this.codanalise = codanalise;
	}

	public String getCpfcnpj() {
		return cpfcnpj;
	}

	public void setCpfcnpj(String cpfcnpj) {
		this.cpfcnpj = cpfcnpj;
	}

	public String getRazaosocialspe() {
		return razaosocialspe;
	}

	public void setRazaosocialspe(String razaosocialspe) {
		this.razaosocialspe = razaosocialspe;
	}

	public BigDecimal getParcela1() {
		return parcela1;
	}

	public void setParcela1(BigDecimal parcela1) {
		this.parcela1 = parcela1;
	}

	public String getNotafiscal1() {
		return notafiscal1;
	}

	public void setNotafiscal1(String notafiscal1) {
		this.notafiscal1 = notafiscal1;
	}

	public Integer getMesfaturamento1() {
		return mesfaturamento1;
	}

	public void setMesfaturamento1(Integer mesfaturamento1) {
		this.mesfaturamento1 = mesfaturamento1;
	}

	public BigDecimal getParcela2() {
		return parcela2;
	}

	public void setParcela2(BigDecimal parcela2) {
		this.parcela2 = parcela2;
	}

	public String getNotafiscal2() {
		return notafiscal2;
	}

	public void setNotafiscal2(String notafiscal2) {
		this.notafiscal2 = notafiscal2;
	}

	public Integer getMesfaturamento2() {
		return mesfaturamento2;
	}

	public void setMesfaturamento2(Integer mesfaturamento2) {
		this.mesfaturamento2 = mesfaturamento2;
	}

	public Integer getMesfaturado() {
		return mesfaturado;
	}

	public void setMesfaturado(Integer mesfaturado) {
		this.mesfaturado = mesfaturado;
	}

	public BigDecimal getTotalrecebidoincorporadora() {
		return totalrecebidoincorporadora;
	}

	public void setTotalrecebidoincorporadora(BigDecimal totalrecebidoincorporadora) {
		this.totalrecebidoincorporadora = totalrecebidoincorporadora;
	}

	public BigDecimal getRecebimentoteoricobanco() {
		return recebimentoteoricobanco;
	}

	public void setRecebimentoteoricobanco(BigDecimal recebimentoteoricobanco) {
		this.recebimentoteoricobanco = recebimentoteoricobanco;
	}

	public String getNumeronotafiscal() {
		return numeronotafiscal;
	}

	public void setNumeronotafiscal(String numeronotafiscal) {
		this.numeronotafiscal = numeronotafiscal;
	}

	public BigDecimal getTotalrecebido() {
		return totalrecebido;
	}

	public void setTotalrecebido(BigDecimal totalrecebido) {
		this.totalrecebido = totalrecebido;
	}

	public String getObservacao() {
		return observacao;
	}

	public void setObservacao(String observacao) {
		this.observacao = observacao;
	}

	public Date getDtatividade() {
		return dtatividade;
	}

	public void setDtatividade(Date dtatividade) {
		this.dtatividade = dtatividade;
	}


	
}
