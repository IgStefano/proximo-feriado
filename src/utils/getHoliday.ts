import type { Holiday } from "../types/typings";

const unavailableHoliday = {
  name: "Não encontrado",
  messages: [
    {
      text: "Lamentamos, mas não encontramos o próximo feriado",
      emoji: "😔",
    },
  ],
};

export function getHolidayByDate(holidays: Holiday[]) {
  const unformattedToday = new Date();
  const today = unformattedToday.toISOString().split("T")[0];

  const holidayIndex = holidays.findIndex((holiday) => holiday.date === today);
  const isTodayHoliday = holidayIndex !== -1;

  if (isTodayHoliday) {
    return holidays[holidayIndex];
  }

  const now = Date.now();
  const nextHoliday =
    holidays.find((holiday) => new Date(holiday.date).getTime() - now >= 0) ||
    unavailableHoliday;

  return nextHoliday;
}

export function getHolidayByName({
  holidays,
  name,
}: {
  holidays: Holiday[];
  name: string;
}) {
  const holiday = holidays.find((holiday) => holiday.name === name);

  return holiday || unavailableHoliday;
}
