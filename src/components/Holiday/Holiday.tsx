import { getHolidayByName } from "../../utils/getHoliday";
import holidays from "../../data/holidays.json";
import { getMessage } from "../../utils/getMessage";
import { useCallback, useState } from "react";
import type { Message } from "../../types/typings";
import Contribution from "./Contribution";
import MessageChanger from "./MessageChanger";
import Modal from "../Suggestions/Modal";
import SuggestionsForm from "../Suggestions/Suggestions";

interface HolidayProps {
  holidayData: {
    name: string;
    message: Message;
  };
  alecrimUrl: string;
}

export default function Holiday({ holidayData, alecrimUrl }: HolidayProps) {
  const [currentMessage, setCurrentMessage] = useState(holidayData.message);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const changeMessage = useCallback(() => {
    const { messages } = getHolidayByName({ holidays, name: holidayData.name });
    const message = getMessage(messages);

    if (!isModalOpen) {
      setCurrentMessage(message);
    }
  }, [isModalOpen]);

  const contribution = currentMessage.contribution;

  return (
    <>
      <main className="flex h-full flex-col justify-center">
        <h2 className="mb-2 text-center font-fredoka text-4xl">
          {holidayData.name}
        </h2>
        <h1 className="relative px-4 text-center text-3xl font-bold text-red-700 sm:text-5xl lg:text-7xl">
          {currentMessage.text}
          <span> {currentMessage.emoji}</span>
          <Contribution contribution={contribution} />
        </h1>
        <MessageChanger changeMessage={changeMessage} />
        <small
          onClick={handleOpenModal}
          className="mt-2 flex w-full cursor-pointer justify-center text-xs font-light italic tracking-wide opacity-80"
        >
          (Ou clique aqui para sugerir uma nova mensagem)
        </small>
      </main>
      <Modal isOpen={isModalOpen} handleCloseModal={handleCloseModal}>
        <SuggestionsForm alecrimUrl={alecrimUrl} />
      </Modal>
    </>
  );
}
