import { Component, input } from '@angular/core';
import { Message } from '../../../interfaces/message';

@Component({
  selector: 'app-chatlog',
  imports: [],
  templateUrl: './chatlog.html',
  styleUrl: './chatlog.css',
})
export class Chatlog {
  chatHistory = input<Message[]>([]);
  isLoading = input<boolean>(false);

  renderImage(registry: Message) {
    return `data:image/jpeg;base64,${registry.image}`;
  }

}

