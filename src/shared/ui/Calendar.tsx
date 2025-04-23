// import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export function Calendar() {
  // const [startDate, setStartDate] = useState(new Date());
  return (
    <DatePicker
      // selected={startDate}
      // onChange={(date) => setStartDate(date)}
      locale="ru"
      showTimeSelect
      timeFormat="HH:mm"
      timeIntervals={60}
      dateFormat="dd.MM.yyyy HH:mm"
      calendarClassName="!w-[440px] !h-[315px] [&_.react-datepicker__header]:pt-4 [&_.react-datepicker__header]:pb-3"
      dayClassName={() => "!w-10 !h-10 !m-1 !text-[16px] !leading-10"}
      timeClassName={() => "!py-2 !text-[16px]"}
      inline
    />
  );
}
