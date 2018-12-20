package com.montreal.portal.entity;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "TB_TIPO_CLIENTES")
public class TipoCliente  implements Serializable{

	/**
	 * 
	 */
	private static final long serialVersionUID = -5157191070936283913L;

	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="cod_tipo_cliente")
	private Integer  codTipoCliente;
	
	
	@Column(name="desc_tipo_cliente")
	private String descTipoCliente;


	public Integer getCodTipoCliente() {
		return codTipoCliente;
	}


	public void setCodTipoCliente(Integer codTipoCliente) {
		this.codTipoCliente = codTipoCliente;
	}


	public String getDescTipoCliente() {
		return descTipoCliente;
	}


	public void setDescTipoCliente(String descTipoCliente) {
		this.descTipoCliente = descTipoCliente;
	} 
	
	
	
	
}
