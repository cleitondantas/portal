package com.montreal.portal.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;


@Entity
@Table(name = "TB_CONTATO_CLIENTES")
public class Contato {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@Column(name="cod_tipo_contato")
	private Integer codtipocontato;
	
	@Column(name="cpf_cnpj")
	private String cpfcnpj;
	
	@Column(name="desc_contato")
	private String desccontato;

	public Integer getCodtipocontato() {
		return codtipocontato;
	}

	public void setCodtipocontato(Integer codtipocontato) {
		this.codtipocontato = codtipocontato;
	}


	public String getDesccontato() {
		return desccontato;
	}

	public void setDesccontato(String desccontato) {
		this.desccontato = desccontato;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getCpfcnpj() {
		return cpfcnpj;
	}

	public void setCpfcnpj(String cpfcnpj) {
		this.cpfcnpj = cpfcnpj;
	}

	
}
