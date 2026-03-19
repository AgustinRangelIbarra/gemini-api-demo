import { Injectable } from '@angular/core';
import {
  GenerateContentParameters,
  GenerateContentResponse,
  GoogleGenAI,
} from '@google/genai';
import { environment } from '../../environments/environment';
import { Message } from '../interfaces/message';
import { GeminiTextParams } from '../interfaces/gemini-text-params';
import { Model } from '../interfaces/model';
import { GeminiReponse } from '../interfaces/gemini-reponse';
import GEMINI_ROLE from '../constants/gemini-setup';


@Injectable({
  providedIn: 'root',
})
export class GeminiApiService {
  private readonly geminiAI = new GoogleGenAI({ apiKey: environment.geminiApiKey });

  async geminiRequest(params: GeminiTextParams, model: Model): Promise<GeminiReponse> {
    let response: GeminiReponse = {
      type:'unknown'
    };

    switch (model.type) {
      case 'text':
        response = await this.askGemini(params, model);
        break;

      case 'image':
        response = await this.createImageFromGemini(params, model);
        break;

      default:
        break;
    }

    return response;
  }

  async askGemini(params: any, model: Model): Promise<GeminiReponse> {
    const { message, chatHistory } = params;

    const chatContext = this.createChatContext(chatHistory, model);

    try {
      const response = await chatContext.sendMessage(message);

      return {
        type: 'text',
        message: response.text
      }
    } catch (error) {
      console.error('Error communicating with Gemini:', error);
      throw error;
    }
  }

  private createChatContext(chatLog: Message[], model: Model) {
    const userHistory = chatLog.filter((entry) => entry.sender === 'user');
    const geminiHistory = chatLog.filter((entry) => entry.sender === 'Team PepsiCo Agent');

    return this.geminiAI.chats.create({
      model: model.name,
      config: {
        systemInstruction: [
          {
            text: GEMINI_ROLE.PEPSICO_SALES
          }
        ],
      },
      history: [
        {
          role: 'user',
          parts: userHistory.map((entry) => ({ text: entry.message })),
        },
        {
          role: 'model',
          parts: geminiHistory.map((entry) => ({ text: entry.message })),
        },
      ],
    });
  }

  async createImageFromGemini(params: any, model: Model): Promise<GeminiReponse>{
    const { name: modelName } = model;
    const { message } = params;

    try {
      const params: GenerateContentParameters = {
        model: modelName,
        contents: message.message,
      };

      const response = await this.geminiAI.models.generateContent(params);

      return this.transformResponse(response);

    } catch (error) {
        console.error('Error comunicting with Gemini', error);
      throw error;
    }
  }

  private transformResponse(response: GenerateContentResponse): GeminiReponse {
    if (response?.candidates && response.candidates[0]?.content?.parts) {
      for (const part of response.candidates[0].content.parts) {
        if (part.text) {

          return {
            type: 'text',
            message: part.text
          }

        } else if (part.inlineData) {
          const imageData = part.inlineData.data;

          return {
            type: 'image',
            image_b64: imageData
          }
        }
      }
    }

    return {
      type: 'unknown',
      message: 'No valid response found'
    };
  }
}
