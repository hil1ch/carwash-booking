import { useState } from "react";
import { Header } from "../shared/ui/Header";
import { FinalChooseBlock } from "../widgets/FinalChooseBlock";
import { Button } from "../shared/ui/Button";
import { Calendar } from "../shared/ui/Calendar";
import { BUTTON_AVAILABLE, BUTTON_UNAVAILABLE } from "../shared/constants/ButtonStyles";

export function DatePage() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
  };

  return (
    <div>
      <Header name="Илья Панарин" status="Клиент" />
      <div className="flex justify-between">
        <div className="">
          <div className="mr-45">
            <h2 className="w-[250px] text-[18px] font-medium mr-[25px] mt-[90px] mb-[15px]">
              Выберите время
            </h2>
          </div>
          <Calendar
            onDateChange={handleDateChange}
            selectedDate={selectedDate}
            minDate={new Date()}
          />
        </div>
        <div className="w-full mt-[90px] ml-[35px]">
          <FinalChooseBlock />
          <Button
            type="button"
            className={`w-full mt-[17px] text-[16px] font-medium p-[16px]  border-none rounded-[15px] cursor-pointer"
           ${
             !selectedDate ? `${BUTTON_UNAVAILABLE}` : `${BUTTON_AVAILABLE}`
           }`}
            disabled={!selectedDate}
          >
            Забронировать
          </Button>
        </div>
      </div>
    </div>
  );
}
