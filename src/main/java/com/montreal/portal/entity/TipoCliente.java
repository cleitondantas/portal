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
	private Integer  codtipocliente;
	
	
	@Column(name="desc_tipo_cliente")
	private String desctipocliente;


	public Integer getCodtipocliente() {
		return codtipocliente;
	}


	public void setCodtipocliente(Integer codtipocliente) {
		this.codtipocliente = codtipocliente;
	}


	public String getDesctipocliente() {
		return desctipocliente;
	}


	public void setDesctipocliente(String desctipocliente) {
		this.desctipocliente = desctipocliente;
	}


	
	
	
	
}
