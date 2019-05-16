import { Component, OnInit } from '@angular/core';

import * as Stomp from 'stompjs';
import * as SockJS from 'sockjs-client';
import * as Socket from 'socket.io-client';
import * as io from 'socket.io-client';

import * as $ from 'jquery';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  private stompClient;
  private url = 'http://localhost:8100';
  constructor() { }

  ngOnInit() {
  }

  connect() {
    //let ws = new SockJS(this.url +'/socket');
    let ws = Socket(this.url +"/socket");
    this.stompClient = Stomp.over(ws);
    let that = this;
    this.stompClient.connect({}, function () {
      that.stompClient.subscribe("/chat", (message) => {
        if (message.body) {
          $(".chat").prepend("<div class='alert alert-secondary flex-wrap'>" + message.body + "</div>");
        }
      });
    });
  }

  
  sendMessage(message) {
    if (message) {
      this.stompClient.send("/app/send/message", {}, message);
    }
    $('#input').val('');
  }
}
