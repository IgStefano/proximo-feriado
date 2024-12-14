import holidays from "../data/holidays.json";
import { getHolidayByDate } from "./getHoliday";
import { getMessage } from "./getMessage";

export function getInitialHoliday() {
  const { name, messages } = getHolidayByDate(holidays);
  const message = getMessage(messages);

  return {
    name,
    message,
  };
}
