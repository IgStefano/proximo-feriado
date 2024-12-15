import { getHolidayByName } from "../utils/getHoliday";
import holidays from "../data/holidays.json";
import { getMessage } from "../utils/getMessage";
import { useState } from "react";
import type { Message } from "../types/typings";
import { getAcknowledgment } from "../utils/getAcknowledgment";

interface HolidayProps {
  holidayData: {
    name: string;
    message: Message;
  };
}

export default function Holiday({ holidayData }: HolidayProps) {
  const [currentMessage, setCurrentMessage] = useState(holidayData.message);

  const changeMessage = () => {
    const { messages } = getHolidayByName({ holidays, name: holidayData.name });
    const message = getMessage(messages);

    setCurrentMessage(message);
  };

  const contribution = currentMessage.contribution;

  const Contribution = () => {
    if (contribution) {
      const AuthorContainer = contribution.link ? "a" : "span";
      return (
        <small className="block mt-2 text-gray-900 text-base dark:text-gray-50 opacity-40">
          ({getAcknowledgment()},{" "}
          <AuthorContainer
            {...(contribution.link && { href: contribution.link })}
          >
            {contribution.author}
          </AuthorContainer>
          )
        </small>
      );
    }

    return null;
  };

  return (
    <main className="h-full flex justify-center flex-col">
      <h2 className="font-fredoka text-4xl text-center mb-8">
        {holidayData.name}
      </h2>
      <h1
        onClick={changeMessage}
        className="text-red-700 font-bold text-3xl sm:text-5xl lg:text-7xl cursor-pointer text-center px-4"
      >
        {currentMessage.text}
        <span> {currentMessage.emoji}</span>
        <Contribution />
      </h1>
    </main>
  );
}
