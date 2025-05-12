import { useState } from "react";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import { Header } from "../shared/ui/Header";
import { ServicesList } from "../widgets/ServicesList";
import { Search } from "../shared/ui/Search";
import { Button } from "../shared/ui/Button";
import { FinalChooseBlock } from "../widgets/FinalChooseBlock";
import { BUTTON_AVAILABLE, BUTTON_UNAVAILABLE } from "../shared/constants/ButtonStyles";
import { ICarWash } from "../widgets/CarWash";
import { IService } from "../widgets/ServiceItem";

export function ServicesPage() {
  const { carWashId } = useParams<{ carWashId: string }>();
  const [selectedServiceId, setSelectedServiceId] = useState<number | null>(null);
  const [selectedServiceData, setSelectedServiceData] = useState<IService | undefined>(undefined);
  const location = useLocation();
  const navigate = useNavigate();

  // Получаем список автомоек из состояния навигации
  const carWashesData = location.state?.carWashesData as ICarWash[] | undefined;
  const selectedCarWash = carWashesData?.find(wash => wash.id === Number(carWashId));

  const handleServiceSelect = (serviceId: number | null, serviceData: IService | null) => {
    setSelectedServiceId(serviceId);
    setSelectedServiceData(serviceData || undefined);
  };

  const handleContinueToDate = () => {
    if (selectedServiceId && carWashId && selectedServiceData) {
      navigate(`/date/${carWashId}/${selectedServiceId}`, { 
        state: { 
          carWashesData,
          selectedCarWash,
          selectedService: selectedServiceData
        } 
      });
    }
  };

  if (!carWashId) {
    return <div>Ошибка: ID автомойки не найден</div>;
  }

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
            selectedService={selectedServiceId}
            onSelectedService={handleServiceSelect}
            carWashId={Number(carWashId)}
          />
        </div>
        <div className="w-full mt-[90px] ml-[35px]">
          {selectedCarWash && (
            <FinalChooseBlock 
              carWash={selectedCarWash}
            />
          )}
          <Button
            type="button"
            className={`w-full mt-[17px] text-[16px] font-medium p-[16px] border-none rounded-[15px] cursor-pointer
              ${!selectedServiceId ? BUTTON_UNAVAILABLE : BUTTON_AVAILABLE}`}
            disabled={!selectedServiceId}
            onClick={handleContinueToDate}
          >
            Продолжить
          </Button>
        </div>
      </div>
    </div>
  );
}