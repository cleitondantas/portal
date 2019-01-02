package com.montreal.portal.entity;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "TB_TIPO_CONTATO")
public class TipoContato  implements Serializable{

		/**
	 * 
	 */
	private static final long serialVersionUID = -752783296355493156L;

		@Id
		@GeneratedValue(strategy = GenerationType.IDENTITY)
		@Column(name="cod_tipo_contato")
		private Integer codtipocontato;
		
		@Column(name="desc_tipo_contato")
		private String desctipocontato;

		public Integer getCodtipocontato() {
			return codtipocontato;
		}

		public void setCodtipocontato(Integer codtipocontato) {
			this.codtipocontato = codtipocontato;
		}

		public String getDesctipocontato() {
			return desctipocontato;
		}

		public void setDesctipocontato(String desctipocontato) {
			this.desctipocontato = desctipocontato;
		}

		
		
		
		
	
}
