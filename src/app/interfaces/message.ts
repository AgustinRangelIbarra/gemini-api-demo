export interface Message {
  id: string;
  sender: 'user' | 'Team PepsiCo Agent';
  date?: string;
  image?: string,
  message?: string;
}
