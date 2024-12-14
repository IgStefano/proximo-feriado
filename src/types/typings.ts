export type Message = {
  text: string;
  emoji: string;
};

export type Holiday = {
  date: string;
  name: string;
  messages: Message[];
};
