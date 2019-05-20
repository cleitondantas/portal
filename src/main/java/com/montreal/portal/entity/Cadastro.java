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

import com.fasterxml.jackson.annotation.JsonIdentityInfo;



@Entity
@Table(name = "TB_CADASTRO")
public class Cadastro implements Serializable{

	/**
	 * 
	 */
	private static final long serialVersionUID = -6604602776788012022L;
	
	
	public Cadastro() {
		// TODO Auto-generated constructor stub
	}
	
	
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="cod_cadastro")
	private Integer codcadastro;
	
	
	@Column(name="cod_originacao")
	private Integer  codoriginacao;
	
	@Column(name="numero_cadastro_incorporadora_fid")
	private  Integer numerocadastroincorporadorafid;
	@Column(name="cod_incorporadora")
	private Integer codincorporadora;

	@Column(name="cpf_cnpj")
	private String cpfcnpj;

	@Column(name="cod_empreendimento")
	private Integer codempreendimento;	
	
	@Column(name="bloco_torre")
	private String blocotorre;
	
	@Column(name="unidade")
	private String unidade;
	

	@Column(name="cod_usuario")
	private Long codusuario;
	
	
	@Column(name="dt_entrada")
	private Date dtentrada;
	
	@Column(name="vaga_automovel")
	private String vagaautomovel;

	@Column(name="box")
	private String box;
	

	@Column(name="cep")
	private String cep;
	
	@Column(name="numero")
	private String numero;
	
	@Column(name="bairro")
	private String bairro;
	
	@Column(name="cidade")
	private String cidade;
	
	@Column(name="endereco")
	private String endereco;
	
	@Column(name="complemento")
	private String complemento;
	
	@Column(name="uf")
	private String uf;
	
	@Column(name="dt_atividade")
	private Date dtatividade; // para controle de inssercao no banco de dados
	
	
	@Column(name="dt_atualizacao")
	private Date dtatualizacao; // para controle de atualizacao no banco de dados
	
    @ManyToMany(cascade={CascadeType.ALL}, fetch = FetchType.EAGER)
	@JoinTable(name = "tb_cliente_cadastro", 
	joinColumns = @JoinColumn(name = "cod_cadastro", referencedColumnName = "cod_cadastro"),
	inverseJoinColumns = @JoinColumn(name = "cpf_cnpj", referencedColumnName = "cpf_cnpj"))
    @JsonIdentityInfo(generator = com.fasterxml.jackson.annotation.ObjectIdGenerators.PropertyGenerator.class, property = "cpfcnpj")
	private List<Cliente> clientes;

	public Integer getCodcadastro() {
		return codcadastro;
	}

	public void setCodcadastro(Integer codcadastro) {
		this.codcadastro = codcadastro;
	}

	public Integer getCodoriginacao() {
		return codoriginacao;
	}

	public void setCodoriginacao(Integer codoriginacao) {
		this.codoriginacao = codoriginacao;
	}




	public String getBlocotorre() {
		return blocotorre;
	}

	public void setBlocotorre(String blocotorre) {
		this.blocotorre = blocotorre;
	}

	public String getUnidade() {
		return unidade;
	}

	public void setUnidade(String unidade) {
		this.unidade = unidade;
	}

	public Long getCodusuario() {
		return codusuario;
	}

	public void setCodusuario(Long codusuario) {
		this.codusuario = codusuario;
	}



	public Date getDtentrada() {
		return dtentrada;
	}

	public void setDtentrada(Date dtentrada) {
		this.dtentrada = dtentrada;
	}

	public String getVagaautomovel() {
		return vagaautomovel;
	}

	public void setVagaautomovel(String vagaautomovel) {
		this.vagaautomovel = vagaautomovel;
	}

	public String getBox() {
		return box;
	}

	public void setBox(String box) {
		this.box = box;
	}


	public String getCep() {
		return cep;
	}

	public void setCep(String cep) {
		this.cep = cep;
	}

	public String getNumero() {
		return numero;
	}

	public void setNumero(String numero) {
		this.numero = numero;
	}

	public String getBairro() {
		return bairro;
	}

	public void setBairro(String bairro) {
		this.bairro = bairro;
	}

	public String getCidade() {
		return cidade;
	}

	public void setCidade(String cidade) {
		this.cidade = cidade;
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

	public String getUf() {
		return uf;
	}

	public void setUf(String uf) {
		this.uf = uf;
	}

	public List<Cliente> getClientes() {
		return clientes;
	}

	public void setClientes(List<Cliente> clientes) {
		this.clientes = clientes;
	}


	public Date getDtatividade() {
		return dtatividade;
	}

	public void setDtatividade(Date dtatividade) {
		this.dtatividade = dtatividade;
	}

	public String getCpfcnpj() {
		return cpfcnpj;
	}

	public void setCpfcnpj(String cpfcnpj) {
		this.cpfcnpj = cpfcnpj;
	}


	public Integer getCodincorporadora() {
		return codincorporadora;
	}

	public void setCodincorporadora(Integer codincorporadora) {
		this.codincorporadora = codincorporadora;
	}

	public Integer getNumerocadastroincorporadorafid() {
		return numerocadastroincorporadorafid;
	}

	public void setNumerocadastroincorporadorafid(Integer numerocadastroincorporadorafid) {
		this.numerocadastroincorporadorafid = numerocadastroincorporadorafid;
	}

	public Integer getCodempreendimento() {
		return codempreendimento;
	}

	public void setCodempreendimento(Integer codempreendimento) {
		this.codempreendimento = codempreendimento;
	}

	public Date getDtatualizacao() {
		return dtatualizacao;
	}

	public void setDtatualizacao(Date dtatualizacao) {
		this.dtatualizacao = dtatualizacao;
	}


	

	
}