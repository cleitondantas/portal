package com.montreal.portal.entity;

import java.io.Serializable;
import java.math.BigDecimal;
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
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;



@Entity
@Table(name = "TB_CADASTRO")
public class Cadastro implements Serializable{

	/**
	 * 
	 */
	private static final long serialVersionUID = -6604602776788012022L;
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

	
	@ManyToOne
	@JoinColumn(name="cod_empreendimento", referencedColumnName="cod_empreendimento")
	private Empreendimento empreendimento;
	
	
	@Column(name="bloco_torre")
	private String blocotorre;
	
	@Column(name="unidade")
	private String unidade;
	
	@Column(name="valor_venda", precision=16, scale=2)
	private BigDecimal valorvenda;
	
	@Column(name="saldo_devedor", precision=16, scale=2)
	private BigDecimal saldodevedor;
	
	@Column(name="cod_usuario")
	private Long codusuario;
	
	
	@Column(name="data_cadastro")
	private Date datacadastro;
	
	@Column(name="vaga_automovel")
	private String vagaautomovel;

	@Column(name="box")
	private String box;
	
	@Column(name="numero_apartamento")
	private String numeroapartamento;
	
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
	
	@Column(name="data_entrada")
	private Date dataentrada;
	
    @ManyToMany(cascade={CascadeType.MERGE, CascadeType.PERSIST}, fetch = FetchType.EAGER)
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

	public BigDecimal getValorvenda() {
		return valorvenda;
	}

	public void setValorvenda(BigDecimal valorvenda) {
		this.valorvenda = valorvenda;
	}

	public BigDecimal getSaldodevedor() {
		return saldodevedor;
	}

	public void setSaldodevedor(BigDecimal saldodevedor) {
		this.saldodevedor = saldodevedor;
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

	public String getNumeroapartamento() {
		return numeroapartamento;
	}

	public void setNumeroapartamento(String numeroapartamento) {
		this.numeroapartamento = numeroapartamento;
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

	public Date getDataentrada() {
		return dataentrada;
	}

	public void setDataentrada(Date dataentrada) {
		this.dataentrada = dataentrada;
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

	public Empreendimento getEmpreendimento() {
		return empreendimento;
	}

	public void setEmpreendimento(Empreendimento empreendimento) {
		this.empreendimento = empreendimento;
	}

	

	
}