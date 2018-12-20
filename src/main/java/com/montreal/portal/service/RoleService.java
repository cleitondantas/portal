package com.montreal.portal.service;

import org.springframework.stereotype.Component;

import com.montreal.portal.entity.Role;

@Component
public interface RoleService {

	Role findByProfile(String profile);
	
	Role findByNivel(Integer nivel);
	
	Role save(Role role);
	void delete(Long id);
	
	Iterable<Role> findAll();
}
