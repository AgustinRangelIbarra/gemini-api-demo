import { ModelsCollection } from "../interfaces/model";

const MODELS: ModelsCollection = {
  // IMAGE GENERATION
  GEMINI_2_5_FLASH_IMAGE: {
    name: 'gemini-2.5-flash-image',
    type: 'image'
  },
  GEMINI_3_1_FLASH_IMAGE_PREVIEW: {
    name: 'gemini-3.1-flash-image-preview',
    type: 'image'
  },
  // TEXT
  GEMINI_3_1_PRO_PREVIEW: {
    name: 'gemini-3.1-pro-preview',
    type: 'text'
  },
  GEMINI_2_5_PRO: {
    name: 'gemini-2.5-pro',
    type: 'text'
  },
  GEMINI_3_1_FLASH_LITE_PREVIEW: {
    name: 'gemini-3.1-flash-lite-preview',
    type: 'text'
  },
  GEMINI_2_5_FLASH: {
    name: 'gemini-2.5-flash',
    type: 'text'
  },
};

export { MODELS };
