package com.montreal.portal.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.montreal.portal.entity.Role;
import com.montreal.portal.repository.RoleRepository;
import com.montreal.portal.service.RoleService;



@Component
public class RoleServiceImpl implements RoleService{

	@Autowired
	private RoleRepository roleRepository; 
	
	@Override
	public Role findByProfile(String profile) {
		return roleRepository.findByProfile(profile);
	}

	@Override
	public Role findByNivel(Integer nivel) {
		// TODO Auto-generated method stub
		return roleRepository.findByNivel(nivel);
	}

	@Override
	public Role save(Role role) {
		// TODO Auto-generated method stub
		return roleRepository.save(role);	
	}

	@Override
	public void delete(Long id) {

		roleRepository.deleteById(id);
		
	}

	@Override
	public Iterable<Role> findAll() {
		// TODO Auto-generated method stub
		return roleRepository.findAll();
	}



}
