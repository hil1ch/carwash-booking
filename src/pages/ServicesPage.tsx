import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Header } from "../shared/ui/Header";
import { ServicesList } from "../widgets/ServicesList";
import { Search } from "../shared/ui/Search";
import { Button } from "../shared/ui/Button";
import { FinalChooseBlock } from "../widgets/FinalChooseBlock";
import { BUTTON_AVAILABLE, BUTTON_UNAVAILABLE } from "../shared/constants/ButtonStyles";
import { CARWASHES } from "../shared/constants/CarWashesData";

export function ServicesPage() {
  const { carWashId } = useParams<{ carWashId: string }>();
  const [selectedService, setSelectedService] = useState<number | null>(null);
  const navigate = useNavigate();

  const selectedCarWash = CARWASHES.find(wash => wash.id === Number(carWashId));

  const handleContinueToDate = () => {
    if (selectedService && carWashId) {
      navigate(`/date/${carWashId}/${selectedService}`);
    }
  };

  return (
    <div>
      <Header name="Илья Панарин" status="Клиент" />
      <div className="flex justify-between">
        <div>
          <div className="flex items-center justify-between mt-[90px]">
            <h2 className="w-[250px] text-[18px] font-medium mr-[25px]">
              Выберите услугу
            </h2>
            <Search placeholder="Найти услугу" />
          </div>
          <ServicesList
            selectedService={selectedService}
            onSelectedService={setSelectedService}
          />
        </div>
        <div className="w-full mt-[90px] ml-[35px]">
          <FinalChooseBlock carWash={selectedCarWash}/>
          <Button
            type="button"
            className={`w-full mt-[17px] text-[16px] font-medium p-[16px]  border-none rounded-[15px] cursor-pointer"
           ${
             !selectedService ? `${BUTTON_UNAVAILABLE}` : `${BUTTON_AVAILABLE}`
           }`}
            disabled={!selectedService}
            onClick={handleContinueToDate}
          >
            Продолжить
          </Button>
        </div>
      </div>
    </div>
  );
}
