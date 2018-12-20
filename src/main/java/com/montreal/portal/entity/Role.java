package com.montreal.portal.entity;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
@Entity
@Table(name = "tb_roles")
public class Role implements Serializable {
	
	/**
	 * 
	 */
	private static final long serialVersionUID = -6104056753342265107L;
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
	
    private String profile;
    private Integer nivel;
	/*
    @Fetch(FetchMode.JOIN)
	@ManyToMany(mappedBy = "perfis",targetEntity = Usuario.class)
    @JsonIdentityInfo(generator = com.fasterxml.jackson.annotation.ObjectIdGenerators.PropertyGenerator.class, property = "id")
    private Set<Usuario> usuarios;
  */

	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getProfile() {
		return profile;
	}

	public void setProfile(String profile) {
		this.profile = profile;
	}
	public Integer getNivel() {
		return nivel;
	}
	public void setNivel(Integer nivel) {
		this.nivel = nivel;
	}
//	public Set<Usuario> getUsuarios() {
//		return usuarios;
//	}
//	public void setUsuarios(Set<Usuario> usuarios) {
//		this.usuarios = usuarios;
//	}

	
    
    
}
