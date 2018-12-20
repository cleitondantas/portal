package com.montreal.portal.controler;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@CrossOrigin(origins = "*")
public class WelcomeController {

	@RequestMapping("/lista")
	public String portal() {	
		return "";
	}
	
	@RequestMapping("/login")
	public String login() {	
		return "";
	}
	
	@RequestMapping("/home")
	public String home() {	
		return "";
	}


	
}
