package com.montreal.portal;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cache.annotation.EnableCaching;
import org.springframework.security.crypto.password.PasswordEncoder;

@SpringBootApplication
@EnableCaching
public class PortalApplication  implements CommandLineRunner {

	@Autowired
	private PasswordEncoder passwordEncoder;
	
    public static void main(String[] args) {
        SpringApplication.run(PortalApplication.class, args);
    }

    @Override
    @Transactional
    public void run(String... strings) throws Exception {
	System.out.println("CRIANDO NOVO USUARIO");
	System.out.println(passwordEncoder.encode("montreal"));
    }
}