import { getHolidayByName } from "../utils/getHoliday";
import holidays from "../data/holidays.json";
import { getMessage } from "../utils/getMessage";
import { useState } from "react";

interface HolidayProps {
  holidayData: {
    name: string;
    message: {
      text: string;
      emoji: string;
    };
  };
}

export default function Holiday({ holidayData }: HolidayProps) {
  const [currentMessage, setCurrentMessage] = useState(holidayData.message);

  const changeMessage = () => {
    const { messages } = getHolidayByName({ holidays, name: holidayData.name });
    const message = getMessage(messages);

    setCurrentMessage(message);
  };
  return (
    <main className="h-[80%] flex justify-center flex-col">
      <h2 className="font-fredoka text-4xl text-center mb-8">
        {holidayData.name}
      </h2>
      <h1
        onClick={changeMessage}
        className="text-red-700 font-bold text-3xl sm:text-5xl lg:text-7xl cursor-pointer text-center px-4"
      >
        {currentMessage.text}
        <span> {currentMessage.emoji}</span>
      </h1>
    </main>
  );
}
