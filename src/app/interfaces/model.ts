export interface Model {
  name: 'gemini-2.5-flash-image'
    | 'gemini-3.1-flash-image-preview'
    | 'gemini-3.1-pro-preview'
    | 'gemini-2.5-pro'
    | 'gemini-3.1-flash-lite-preview'
    | 'gemini-2.5-flash';
  type: 'image' | 'text';
}

export interface ModelsCollection {
  [key: string]: Model
}
