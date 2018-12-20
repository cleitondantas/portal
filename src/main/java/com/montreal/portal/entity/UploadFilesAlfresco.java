package com.montreal.portal.entity;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonProperty;

@Entity
@Table(name = "TB_UPLOAD_FILES_ALFRESCO")
public class UploadFilesAlfresco implements Serializable{

	
	/**
	 * 
	 */
	private static final long serialVersionUID = -8860397397439387803L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="ID")
	@JsonProperty("ID")
	private Integer id;
	
	@Column(name="NOME_FILE")
	private String nomeFile;
	
	@Column(name="MIMETYPE")
	private String mimetype;
	
	@Column(name="IDALFRESCO")
	private String idAlfreco;
	
	@Column(name="SHA256")
	private String sha256;
	
	@Column(name="DT_ATIVIDADE")
	private Date dtAtividade;
	
	@Column(name="ID_USUARIO_WEB")
	private Integer idUsuarioWeb;
	
	@Column(name="PLATAFORMA")
	private String plataforma;


	
	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getNomeFile() {
		return nomeFile;
	}

	public void setNomeFile(String nomeFile) {
		this.nomeFile = nomeFile;
	}

	public String getMimetype() {
		return mimetype;
	}

	public void setMimetype(String mimetype) {
		this.mimetype = mimetype;
	}

	public String getIdAlfreco() {
		return idAlfreco;
	}

	public void setIdAlfreco(String idAlfreco) {
		this.idAlfreco = idAlfreco;
	}

	public String getSha256() {
		return sha256;
	}

	public void setSha256(String sha256) {
		this.sha256 = sha256;
	}

	public Date getDtAtividade() {
		return dtAtividade;
	}

	public void setDtAtividade(Date dtAtividade) {
		this.dtAtividade = dtAtividade;
	}

	public Integer getIdUsuarioWeb() {
		return idUsuarioWeb;
	}

	public void setIdUsuarioWeb(Integer idUsuarioWeb) {
		this.idUsuarioWeb = idUsuarioWeb;
	}

	public String getPlataforma() {
		return plataforma;
	}

	public void setPlataforma(String plataforma) {
		this.plataforma = plataforma;
	}
	
	
	
	
	
}
