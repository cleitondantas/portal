package com.montreal.portal.entity;

import java.io.Serializable;
import java.math.BigDecimal;
import java.util.Date;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.persistence.Transient;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;

@Entity
@Table(name = "TB_CLIENTES")
public class Cliente implements Serializable{

	/**
	 * 
	 */
	private static final long serialVersionUID = 7033046181992380543L;

	@Id
	@Column(name="cpf_cnpj")
	private String cpfcnpj;
	
	@Column(name="cod_tipo_cliente")
	private Integer codtipocliente;
	
	@Column(name="nome_cliente")
	private String nomecliente;
	
	@Column(name="n_documento")
	private String ndocumento;
	
	@Column(name="orgao_expedidor")
	private String orgaoexpedidor;
	
	@Column(name="data_expedicao")
	private Date dataexpedicao;
	
	@Column(name="data_nascimento")
	private Date datanascimento;
	
	@Column(name="cod_estado_civil")
	private Integer  codestadocivil;
	
	@Column(name="nacionalidade")
	private String nacionalidade;
	
	@Column(name="profissao")
	private String profissao;
	
	@Column(name="cep_residencial")
	private String cepresidencial; 
	
	@Column(name="uf")
	private String uf; 
	
	@Column(name="cidade")
	private String cidade; 
	
	@Column(name="bairro")
	private String bairro; 
	
	@Column(name="endereco")
	private String endereco; 
	
	@Column(name="complemento")
	private String complemento; 
	
	@Column(name="numero_endereco")
	private String numeroendereco; 
	
	@Column(name="cod_usuario")
	private Long codusuario; 
	
	@Column(name="data_cadastro")
	private Date datacadastro; 
	
	@Column(name="valor_renda", precision=16, scale=2)
	private BigDecimal valorrenda;

	@OneToMany(cascade={CascadeType.MERGE, CascadeType.PERSIST}, fetch = FetchType.EAGER)
	@JoinColumn(name="cpf_cnpj", referencedColumnName="cpf_cnpj")
	@JsonIdentityInfo(generator = com.fasterxml.jackson.annotation.ObjectIdGenerators.PropertyGenerator.class, property = "id")
	private List<Contato> contatos;

	@Transient
	private Boolean principal;
	
	public String getCpfcnpj() {
		return cpfcnpj;
	}

	public void setCpfcnpj(String cpfcnpj) {
		this.cpfcnpj = cpfcnpj;
	}

	public Integer getCodtipocliente() {
		return codtipocliente;
	}

	public void setCodtipocliente(Integer codtipocliente) {
		this.codtipocliente = codtipocliente;
	}

	public String getNomecliente() {
		return nomecliente;
	}

	public void setNomecliente(String nomecliente) {
		this.nomecliente = nomecliente;
	}

	public String getNdocumento() {
		return ndocumento;
	}

	public void setNdocumento(String ndocumento) {
		this.ndocumento = ndocumento;
	}

	public String getOrgaoexpedidor() {
		return orgaoexpedidor;
	}

	public void setOrgaoexpedidor(String orgaoexpedidor) {
		this.orgaoexpedidor = orgaoexpedidor;
	}

	public Date getDataexpedicao() {
		return dataexpedicao;
	}

	public void setDataexpedicao(Date dataexpedicao) {
		this.dataexpedicao = dataexpedicao;
	}

	public Date getDatanascimento() {
		return datanascimento;
	}

	public void setDatanascimento(Date datanascimento) {
		this.datanascimento = datanascimento;
	}

	public Integer getCodestadocivil() {
		return codestadocivil;
	}

	public void setCodestadocivil(Integer codestadocivil) {
		this.codestadocivil = codestadocivil;
	}

	public String getNacionalidade() {
		return nacionalidade;
	}

	public void setNacionalidade(String nacionalidade) {
		this.nacionalidade = nacionalidade;
	}

	public String getProfissao() {
		return profissao;
	}

	public void setProfissao(String profissao) {
		this.profissao = profissao;
	}

	public String getCepresidencial() {
		return cepresidencial;
	}

	public void setCepresidencial(String cepresidencial) {
		this.cepresidencial = cepresidencial;
	}

	public String getUf() {
		return uf;
	}

	public void setUf(String uf) {
		this.uf = uf;
	}

	public String getCidade() {
		return cidade;
	}

	public void setCidade(String cidade) {
		this.cidade = cidade;
	}

	public String getBairro() {
		return bairro;
	}

	public void setBairro(String bairro) {
		this.bairro = bairro;
	}

	public String getEndereco() {
		return endereco;
	}

	public void setEndereco(String endereco) {
		this.endereco = endereco;
	}

	public String getComplemento() {
		return complemento;
	}

	public void setComplemento(String complemento) {
		this.complemento = complemento;
	}

	public String getNumeroendereco() {
		return numeroendereco;
	}

	public void setNumeroendereco(String numeroendereco) {
		this.numeroendereco = numeroendereco;
	}

	public Long getCodusuario() {
		return codusuario;
	}

	public void setCodusuario(Long codusuario) {
		this.codusuario = codusuario;
	}

	public Date getDatacadastro() {
		return datacadastro;
	}

	public void setDatacadastro(Date datacadastro) {
		this.datacadastro = datacadastro;
	}

	public BigDecimal getValorrenda() {
		return valorrenda;
	}

	public void setValorrenda(BigDecimal valorrenda) {
		this.valorrenda = valorrenda;
	}

	public List<Contato> getContatos() {
		return contatos;
	}

	public void setContatos(List<Contato> contatos) {
		this.contatos = contatos;
	}

	public Boolean getPrincipal() {
		return principal;
	}

	public void setPrincipal(Boolean principal) {
		this.principal = principal;
	}
	
	
}