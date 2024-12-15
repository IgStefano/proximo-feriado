export type Message = {
  text: string;
  emoji: string;
  contribution?: {
    author: string;
    link?: string;
  }
};

export type Holiday = {
  date: string;
  name: string;
  messages: Message[];
};
