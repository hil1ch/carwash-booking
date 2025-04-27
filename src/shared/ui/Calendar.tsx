import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

interface ICalendarProps {
  onDateChange: (date: Date | null) => void;
  selectedDate: Date | null;
  minDate?: Date;
}

export function Calendar({onDateChange, selectedDate, minDate}: ICalendarProps) {
  return (
    <DatePicker
      selected={selectedDate}
      onChange={onDateChange}
      minDate={minDate}
      filterTime={(time: Date) => {
        // Если выбрана сегодняшняя дата, фильтруем прошедшее время
        if (minDate && selectedDate) {
          const selectedDateStart = new Date(selectedDate);
          selectedDateStart.setHours(0, 0, 0, 0);
          
          const minDateStart = new Date(minDate);
          minDateStart.setHours(0, 0, 0, 0);
          
          if (selectedDateStart.getTime() === minDateStart.getTime()) {
            return time >= minDate;
          }
        }
        return true;
      }}
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
