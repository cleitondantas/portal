package com.montreal.portal.security.jwt;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.Set;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;

import com.montreal.portal.entity.Role;
import com.montreal.portal.entity.Usuario;



public class JwtUserFactory {
	
	 private JwtUserFactory() {
	    }

	    private static List<GrantedAuthority> mapToGrantedAuthorities(Set<Role> profiles) {
	    		List<GrantedAuthority> authorities = new ArrayList<GrantedAuthority>(); 
	    		for (Iterator<Role> iterator = profiles.iterator(); iterator.hasNext();) {
	    			Role role = (Role) iterator.next();
	    			authorities.add(new SimpleGrantedAuthority(role.getProfile()));
				}
	    		return   authorities ;
	    }
	    
	    // Usuario criado para o jdbc
	    public static JwtUser create(Usuario user) {
	        return new JwtUser(""+user.getId(),user.getLogin(),user.getPassword(),mapToGrantedAuthorities(user.getPerfis()));
	    }
	    

}
