import { useEffect, useState } from "react";
import { ServiceItem, IService as IServiceItem } from "./ServiceItem";
import { IService } from "./ServiceItem";

interface IServicesListProps {
  selectedService: number | null;
  onSelectedService: (id: number | null, service: IServiceItem | null) => void;
  carWashId: number;
}

export function ServicesList({selectedService, onSelectedService, carWashId}: IServicesListProps) {
  const [services, setServices] = useState<IService[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setIsLoading(true);
    fetch(`https://b6781a3024c0920c.mokky.dev/services?carWashId=${carWashId}`)
      .then(res => {
        if (!res.ok) throw new Error('Ошибка сети');
        return res.json();
      })
      .then(data => {
        setServices(data);
        setIsLoading(false);
      })
      .catch(error => {
        setError(error.message);
        setIsLoading(false);
      });
  }, [carWashId]);

  const handleServiceClick = (service: IService) => {
    if (selectedService === service.id) {
      onSelectedService(null, null);
    } else {
      const serviceItem: IServiceItem = {
        id: service.id,
        name: service.name,
        description: service.description,
        time: service.time,
        price: service.price.toString()
      };
      onSelectedService(service.id!, serviceItem);
    }
  };

  if (isLoading) return <div>Загрузка услуг...</div>;
  if (error) return <div>Ошибка: {error}</div>;

  return (
    <ul className="mt-[25px] overflow-y-scroll max-h-[500px]">
      {!services.length ? 'Услуги в выбранной автомойке не найдены' : services.map((service) => (
        <ServiceItem 
          key={service.id}
          name={service.name}
          description={service.description}
          time={service.time}
          price={service.price.toString()}
          className={`transition-all ${
            selectedService === service.id ? "bg-[#E1E5E9] ring-2 ring-[#9AA5B0]" : ""
          }`}
          onClick={() => handleServiceClick(service)}
        />
      ))}
    </ul>
  );
}
