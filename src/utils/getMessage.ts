import type { Message } from "../types/typings";

export function getMessage(messages: Message[]) {
  const randomIndex = getRandomIndex(messages)
  return messages[randomIndex];
}

export function getRandomIndex(array: any[]) {
  const min = 0;
  const max = array.length - 1;
  const randomIndex = Math.floor(Math.random() * (max - min + 1)) + min;
  return randomIndex
}