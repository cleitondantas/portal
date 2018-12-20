package com.montreal.portal.security;

import java.io.Serializable;

import com.montreal.portal.entity.Usuario;

public class CurrentUsuario implements Serializable{

	/**
	 * 
	 */
	private static final long serialVersionUID = 2536569323900599938L;
	private String token;
	private Usuario usuario;

	public CurrentUsuario(String token) {
		this.token = token;
	}
	
	public CurrentUsuario(String token, Usuario usuario) {
		this.token = token;
		this.usuario = usuario;
	}
	public CurrentUsuario(String token, String json) {
		this.token = token;
	}
	
	public String getToken() {
		return token;
	}
	public void setToken(String token) {
		this.token = token;
	}

	public Usuario getUsuario() {
		return usuario;
	}

	public void setUsuario(Usuario usuario) {
		this.usuario = usuario;
	}

	
	
}
