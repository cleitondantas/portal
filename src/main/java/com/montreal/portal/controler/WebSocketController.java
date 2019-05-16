package com.montreal.portal.controler;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;

import io.reactivex.annotations.Nullable;

@Controller
@CrossOrigin(origins = "*")
public class WebSocketController {
	
	
	private final SimpMessagingTemplate template;
	

    @Autowired
    public WebSocketController(final SimpMessagingTemplate template) {
        this.template = template;
    }
 
    @MessageMapping("/send/message")
    public void onReceiveMessage(@Nullable final String message) {
        this.template.convertAndSend("/chat",
            LocalDateTime.now().format(DateTimeFormatter.ofPattern("dd/MM/yyyy HH:mm:ss")) + ": " + message);
    }
	
}
