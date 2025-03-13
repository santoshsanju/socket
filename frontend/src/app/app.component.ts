import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Socket, io } from 'socket.io-client';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ FormsModule ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'frontend';
  message = '';
  messages: string[] = [ "hello" ];
  socket!: Socket;
  constructor() {
  }
  ngOnInit(): void {
    this.socket = io('http://localhost:3000');
    this.socket.on('message', (data) => {
      this.messages.push(data);
    });
  }
  send() {
    this.socket.emit('message', this.message);
    this.message = '';
  }
}
