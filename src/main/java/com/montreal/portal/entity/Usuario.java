package com.montreal.portal.entity;

import java.io.Serializable;
import java.util.Set;

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
@Table(name = "TB_USUARIOS_WEB")
public class Usuario implements Serializable{

	/**
	 * 
	 */
	private static final long serialVersionUID = 4411042468784072348L;

	public Usuario(String login, String password, String sobrenome, String nome, String telefone, String cpf,String email) {
		super();
		this.login = login;
		this.password = password;
		this.sobrenome = sobrenome;
		this.nome = nome;
		this.telefone = telefone;
		this.cpf = cpf;
		this.email = email;
	}

	public Usuario(String nome,String email,String password) {
		this.nome = nome;
		this.email = email;
		this.password = password;
	}
	
	
	public Usuario(String email,String password) {
		this.email = email;
		this.password = password;
	}
	
	public Usuario() {
	}
	
	    @Id
	    @GeneratedValue(strategy = GenerationType.IDENTITY)
	    private Long id;
	    
	    @Column(name="cod_usuario")
	    private Long codUsuario;
	    
	    private String login;		
	    private String password;
	    private String sobrenome;
	    private String nome;
	    private String telefone;
	    private String cpf;
	    
	    @Column(name="email_contato")
		private String email;
	    
	    @Column(name="is_ativo")
		private Boolean isAtivo;
		
	    @ManyToMany(cascade = {CascadeType.MERGE}, fetch = FetchType.EAGER)
		@JoinTable(name = "tb_relac_usuario_roles", 
		joinColumns = @JoinColumn(name = "id_usuario", referencedColumnName = "id"),
		inverseJoinColumns = @JoinColumn(name = "id_role", referencedColumnName = "id"))
	    @JsonIdentityInfo(generator = com.fasterxml.jackson.annotation.ObjectIdGenerators.PropertyGenerator.class, property = "id")
	    private Set<Role> perfis;
	    

		public Long getId() {
			return id;
		}

		public void setId(Long id) {
			this.id = id;
		}

		public String getNome() {
			return nome;
		}

		public void setNome(String nome) {
			this.nome = nome;
		}

		public String getEmail() {
			return email;
		}

		public void setEmail(String email) {
			this.email = email;
		}

		public String getPassword() {
			return password;
		}

		public void setPassword(String password) {
			this.password = password;
		}

		public String getLogin() {
			return login;
		}

		public void setLogin(String login) {
			this.login = login;
		}

		public String getSobrenome() {
			return sobrenome;
		}

		public void setSobrenome(String sobrenome) {
			this.sobrenome = sobrenome;
		}

		public String getTelefone() {
			return telefone;
		}

		public void setTelefone(String telefone) {
			this.telefone = telefone;
		}

		public String getCpf() {
			return cpf;
		}

		public void setCpf(String cpf) {
			this.cpf = cpf;
		}

		public Set<Role> getPerfis() {
			return perfis;
		}

		public void setPerfis(Set<Role> perfis) {
			this.perfis = perfis;
		}

		public Boolean getIsAtivo() {
			return isAtivo;
		}


		public void setIsAtivo(Boolean isAtivo) {
			this.isAtivo = isAtivo;
		}

		public Long getCodUsuario() {
			return codUsuario;
		}

		public void setCodUsuario(Long codUsuario) {
			this.codUsuario = codUsuario;
		}


		
}
