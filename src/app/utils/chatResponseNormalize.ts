import { GeminiReponse } from "../interfaces/gemini-reponse";
import { Message } from "../interfaces/message";
import { formatDate } from "./formatDate";

export const chatResponseNormalize = (response: GeminiReponse, modelType: 'image' | 'text' | 'unknown'): Message => {
  const chatEntry: Message = {
    id: crypto.randomUUID(),
    sender: 'Team PepsiCo Agent',
    date: formatDate(new Date()),
  };

  switch (response.type) {
    case 'image':
      return {
        ...chatEntry,
        image: response.image_b64,
      };
      break;

    case 'text':
      return {
        ...chatEntry,
        message: response.message,
      };
      break;

    case 'unknown':
      return {
        ...chatEntry,
        message: response.message,
      };
      break;

    default:
      break;
  }

  return chatEntry;
};
