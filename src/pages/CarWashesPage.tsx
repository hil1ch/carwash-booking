import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "../shared/ui/Header";
import { Search } from "../shared/ui/Search";
import { Button } from "../shared/ui/Button";
import { CarWashesList } from "../widgets/CarWashesList";
import { BUTTON_AVAILABLE, BUTTON_UNAVAILABLE } from "../shared/constants/ButtonStyles";
import { ICarWash } from "../widgets/CarWash";

export function CarWashesPage() {
  const [selectedCarWash, setSelectedCarWash] = useState<string | null>(null);
  const [carWashesData, setCarWashesData] = useState<ICarWash[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleCarWashesLoaded = useCallback((loadedCarWashes: ICarWash[]) => {
    setCarWashesData(loadedCarWashes);
  }, []);

  const handleSearch = useCallback((query: string) => {
    setSearchQuery(query);
  }, []);

  const handleContinueToService = () => {
    if (selectedCarWash) {
      // Передаем данные в следующую страницу
      navigate(`/services/${selectedCarWash}`, { state: { carWashesData } });
    }
  };

  return (
    <div>
      <Header name="Илья Панарин" status="Клиент" />
      <div className="">
        <div>
          <div className="flex items-center justify-between mt-[90px]">
            <h2 className="w-[250px] text-[18px] font-medium mr-[25px]">
              Выберите автомойку
            </h2>
            <Search placeholder="Найти автомойку" onSearch={handleSearch} />
          </div>
          <CarWashesList
            selectedCarWash={selectedCarWash}
            onSelectedCarWash={setSelectedCarWash}
            onCarWashesLoaded={handleCarWashesLoaded}
            searchQuery={searchQuery}
          />
        </div>
      </div>
      <Button
        type="button"
        className={`w-full mt-[17px] text-[16px] font-medium p-[16px] border-none rounded-[15px] cursor-pointer
          ${!selectedCarWash ? BUTTON_UNAVAILABLE : BUTTON_AVAILABLE}`}
        disabled={!selectedCarWash}
        onClick={handleContinueToService}
      >
        Продолжить
      </Button>
    </div>
  );
}