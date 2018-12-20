package com.montreal.portal.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.montreal.portal.entity.Role;


public interface RoleRepository extends JpaRepository<Role, Long> {

	Role findByProfile(String profile);
	Role findByNivel(Integer nivel);
}
