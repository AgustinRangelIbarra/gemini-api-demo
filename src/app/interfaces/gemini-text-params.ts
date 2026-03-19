import { Message } from "./message";

export interface GeminiTextParams {
  message: Message,
  chatHistory: Message[]
}
