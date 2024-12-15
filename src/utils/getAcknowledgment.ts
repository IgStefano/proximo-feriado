import { getRandomIndex } from "./getMessage";

const acknowledgments = [
    "Muito obrigado",
    "Valeu mesmo",
    "Te devo essa",
    "Você é top",
    "Arrasou",
    "Mandou bem",
    "Show de bola",
    "🙏Gratidão",
    "Valeu pela força"];

export function getAcknowledgment() {
    const randomIndex = getRandomIndex(acknowledgments)
    return acknowledgments[randomIndex]
}