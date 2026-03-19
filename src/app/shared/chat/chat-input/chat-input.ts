import { Component, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Message } from '../../../interfaces/message';
import { Model } from '../../../interfaces/model';
import { formatDate } from '../../../utils/formatDate';
import { Submenu } from '../submenu/submenu';
import { MODELS } from '../../../constants/models';

@Component({
  selector: 'app-chat-input',
  standalone: true, // Recommended for Angular 19
  imports: [FormsModule, Submenu],
  templateUrl: './chat-input.html',
  styleUrl: './chat-input.css',
})
export class ChatInput {
  sendUserMessage = output<Message>();
  changeModel = output<Model>();

  userInput: string = '';
  isOpenSubmenu: boolean = false;

  private selectedModel = signal<Model | null>(null);

  sendMessage() {
    this.validateModelSelection();

    if (this.userInput.trim()) {
      const message: Message = {
        id: crypto.randomUUID(),
        message: this.userInput,
        sender: 'user',
        date: formatDate(new Date()),
      };

      this.sendUserMessage.emit(message);
      this.userInput = '';
    }
  }

  toggleSubmenu(event: Event) {
    event.stopPropagation();
    this.isOpenSubmenu = !this.isOpenSubmenu;
  }

  handleModelSelection(event: Model) {
    this.selectedModel.set(event);

    this.changeModel.emit(event);

    this.isOpenSubmenu = false;
  }

  validateModelSelection() {
    if (!this.selectedModel()) {
      const defaultModel: Model = MODELS['GEMINI_2_5_FLASH'];
      this.handleModelSelection(defaultModel);
    }
  }
}
