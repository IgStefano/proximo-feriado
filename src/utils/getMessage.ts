import type { Message } from "../types/typings";

export function getMessage(messages: Message[]) {
  const min = 0;
  const max = messages.length - 1;
  const randomIndex = Math.floor(Math.random() * (max - min + 1)) + min;
  return messages[randomIndex];
}
