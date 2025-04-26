import { useState } from "react";
import { Header } from "../shared/ui/Header";
import { Search } from "../shared/ui/Search";
import { Button } from "../shared/ui/Button";
import { CarWashesList } from "../widgets/CarWashesList";
import { BUTTON_AVAILABLE, BUTTON_UNAVAILABLE } from "../shared/constants/ButtonStyles";

export function CarWashesPage() {
  const [selectedCarWash, setSelectedCarWash] = useState<number | null>(null);

  return (
    <div>
      <Header name="Илья Панарин" status="Клиент" />
      <div className="">
        <div>
          <div className="flex items-center justify-between mt-[90px]">
            <h2 className="w-[250px] text-[18px] font-medium mr-[25px]">
              Выберите автомойку
            </h2>
            <Search placeholder="Найти автомойку" />
          </div>
          <CarWashesList
            selectedCarWash={selectedCarWash}
            onSelectedCarWash={setSelectedCarWash}
          />
        </div>
      </div>
      <Button
        type="button"
        className={`w-full mt-[17px] text-[16px] font-medium p-[16px] border-none rounded-[15px] cursor-pointer
    ${
      !selectedCarWash
        ? `${BUTTON_UNAVAILABLE}`
        : `${BUTTON_AVAILABLE}`
    }`}
        disabled={!selectedCarWash}
      >
        Продолжить
      </Button>
    </div>
  );
}
