package com.montreal.portal;

import javax.transaction.Transactional;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cache.annotation.EnableCaching;

@SpringBootApplication
@EnableCaching
public class PortalApplication  implements CommandLineRunner {


	
    public static void main(String[] args) {
        SpringApplication.run(PortalApplication.class, args);
    }

    @Override
    @Transactional
    public void run(String... strings) throws Exception {
	
    }
    

}