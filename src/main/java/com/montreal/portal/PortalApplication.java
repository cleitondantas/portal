package com.montreal.portal;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cache.annotation.EnableCaching;
import org.springframework.security.crypto.password.PasswordEncoder;

import com.montreal.portal.entity.Usuario;
import com.montreal.portal.repository.UsuarioRepository;

@SpringBootApplication
@EnableCaching
public class PortalApplication  implements CommandLineRunner {

	@Autowired
	private PasswordEncoder passwordEncoder;
	
	@Autowired
	private UsuarioRepository usuarioRepository;
	
	
    public static void main(String[] args) {
        SpringApplication.run(PortalApplication.class, args);
    }

    @Override
    @Transactional
    public void run(String... strings) throws Exception {
    	
    	Usuario usuario = usuarioRepository.findByLogin("admin");
    	if(usuario!=null && usuario.getLogin().contentEquals("admin")) {
    		
    	}else {
    		usuario = new Usuario();
    	}
    	
    	
    	String pass = passwordEncoder.encode("mci@1234");
    	usuario.setCodUsuario(10001);
    	usuario.setLogin("admin");
    	usuario.setNome("Montreal");
    	usuario.setSobrenome("Informatica");
    	usuario.setPassword(pass);
    	usuario.setCpf("00000000000");
    	usuario.setEmail("cleiton.dantas@montreal.com.br");
    	usuario.setIsAtivo(true);
    	
    	usuarioRepository.save(usuario);
    	
    	System.out.println("PASS CRIPTO"+ pass);
    	System.out.println("Login:"+usuario.getLogin()+" pass:"+"mci@1234");
    
    	
    }
    

}