package com.montreal.portal.service.impl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.montreal.portal.entity.Usuario;
import com.montreal.portal.repository.UsuarioRepository;
import com.montreal.portal.service.UsuarioService;


@Component
public class UsuarioServiceImpl implements UsuarioService{

	
	@Autowired
	private UsuarioRepository usuarioRepository;

	@Override
	public Usuario findByEmail(String email) {
		return usuarioRepository.findByEmail(email);
	}

	@Override
	public Usuario findByNome(String nome) {
		// TODO Auto-generated method stub
		return usuarioRepository.findByNome(nome);
	}

	@Override
	public Usuario save(Usuario usuario) {
		// TODO Auto-generated method stub
		return usuarioRepository.save(usuario);
	}

	@Override
	public Optional<Usuario> findById(Long id) {
		return usuarioRepository.findById(id);
	}
	@Override
	public void delete(Long id) {
		this.usuarioRepository.deleteById(id);
		
	}

	@Override
	public Usuario findByLogin(String login) {
		// TODO Auto-generated method stub
		return usuarioRepository.findByLogin(login);
	}

	@Override
	public List<Usuario> findAll() {
		// TODO Auto-generated method stub
		return usuarioRepository.findAll();
	}

	@Override
	public List<Usuario> save(List<Usuario> usuarios) {
		// TODO Auto-generated method stub
		return usuarioRepository.saveAll(usuarios);
	}

	@Override
	public List<String> findUsuariosWithPartOfLogin(String login) {
		// TODO Auto-generated method stub
		return usuarioRepository.findUsuariosWithPartOfLogin(login);
	}

	@Override
	public Usuario findByCodUsuario(Integer codUsuario) {
		// TODO Auto-generated method stub
		return usuarioRepository.findByCodUsuario(codUsuario);
	}

	@Override
	public List<Usuario> maxxCodUsuario() {
		// TODO Auto-generated method stub
		return usuarioRepository.maxxCodUsuario();
	}


}
