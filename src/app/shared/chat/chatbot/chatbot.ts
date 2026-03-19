import { Component, inject, signal } from '@angular/core';
import { Chatlog } from '../chatlog/chatlog';
import { ChatControls } from '../chat-controls/chat-controls';
import { ChatInput } from '../chat-input/chat-input';
import { Message } from '../../../interfaces/message';
import { GeminiApiService } from '../../../services/gemini-api';
import { formatDate } from '../../../utils/formatDate';
import { Model } from '../../../interfaces/model';
import { chatResponseNormalize } from '../../../utils/chatResponseNormalize';

@Component({
  selector: 'app-chatbot',
  imports: [Chatlog, ChatControls, ChatInput],
  templateUrl: './chatbot.html',
  styleUrl: './chatbot.css',
})
export class Chatbot {
  private readonly geminiApi = inject(GeminiApiService);

  isOpenChatLog = signal(false);
  isLoadingResponse = signal(false);
  isExpandedPanel = signal(false);

  chatHistory: Message[] = [];
  model: Model | null = null;

  async handleUserMessage(message: Message) {
    this.chatHistory.push(message);
    this.isLoadingResponse.set(true);

    await this._geminiResponse(message, this.chatHistory, this.model);
  }

  async _geminiResponse(userMessage: Message, chatHistory: Message[], model: any) {
    try {
      const response = await this.geminiApi.geminiRequest(
        { message: userMessage, chatHistory },
        model,
      );

      const latestMessage = chatResponseNormalize(response, model.type);

      this.chatHistory.push(latestMessage);
    } catch (error) {
      console.error('Error getting Gemini response:', error);
    } finally {
      this.isLoadingResponse.set(false);
    }
  }

  toggleContainer(event: Event) {
    event.stopPropagation();
    this.isOpenChatLog.update((state) => !state);
  }

  handleHideChat() {
    this.isOpenChatLog.set(false);
    this.resetChatHistory();
  }

  handleExpandChange(panelIsOpen: boolean) {
    this.isExpandedPanel.set(panelIsOpen);
  }

  resetChatHistory() {
    this.chatHistory = [];
  }

  setSelectedModel(event: Model) {
    this.resetChatHistory();
    this.model = event;
  }
}
