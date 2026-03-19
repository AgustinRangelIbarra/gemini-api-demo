export interface GeminiReponse {
  type: 'image' | 'text' | 'unknown',
  image_b64?: string,
  message?: string
}
