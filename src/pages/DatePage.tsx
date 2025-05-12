import { useState } from "react";
import { useLocation } from "react-router-dom";
import { Header } from "../shared/ui/Header";
import { FinalChooseBlock } from "../widgets/FinalChooseBlock";
import { Button } from "../shared/ui/Button";
import { Calendar } from "../shared/ui/Calendar";
import {
  BUTTON_AVAILABLE,
  BUTTON_UNAVAILABLE,
} from "../shared/constants/ButtonStyles";
import { ICarWash } from "../widgets/CarWash";

interface IService {
  id: number;
  name: string;
  description: string;
  time: string;
  price: string;
  carWashId: number;
}

export function DatePage() {
  const location = useLocation();
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [carNumber, setCarNumber] = useState("");

  const selectedCarWash = location.state?.selectedCarWash as ICarWash;
  const selectedService = location.state?.selectedService as IService;

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
  };

  const handleCarNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCarNumber(e.target.value);
  };

  const isFormValid = selectedDate && carNumber.trim().length === 11;

  if (!selectedCarWash || !selectedService) {
    return <div>Ошибка: Данные о выбранной автомойке или услуге не найдены</div>;
  }

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
          <FinalChooseBlock
            carNumber={carNumber}
            onCarNumberChange={handleCarNumberChange}
            service={selectedService}
            carWash={selectedCarWash}
          />
          <Button
            type="button"
            className={`w-full mt-[17px] text-[16px] font-medium p-[16px] border-none rounded-[15px] cursor-pointer
           ${!isFormValid ? BUTTON_UNAVAILABLE : BUTTON_AVAILABLE}`}
            disabled={!isFormValid}
          >
            Забронировать
          </Button>
        </div>
      </div>
    </div>
  );
}
