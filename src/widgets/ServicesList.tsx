import { useEffect, useState } from "react";
import { ServiceItem, IService as IServiceItem } from "./ServiceItem";
import { IService } from "./ServiceItem";

interface IServicesListProps {
  selectedService: string | null;
  onSelectedService: (id: string | null, service: IServiceItem | null) => void;
  carWashId: string;
  searchQuery: string;
}

export function ServicesList({
  selectedService,
  onSelectedService,
  carWashId,
  searchQuery,
}: IServicesListProps) {
  const [services, setServices] = useState<IService[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchServices = async () => {
      setIsLoading(true);
      try {
        const endpoint = searchQuery 
          ? `http://45.153.188.106:8000/services/search?name=${encodeURIComponent(searchQuery)}`
          : 'http://45.153.188.106:8000/services/all';
        
        const response = await fetch(endpoint);
        if (!response.ok) throw new Error('Ошибка сети');
        
        const data = await response.json();
        const servicesData = data.map((service: IService) => ({
          ...service,
        }));
        
        setServices(servicesData);
      } catch (error) {
        setError(error instanceof Error ? error.message : 'Произошла ошибка');
      } finally {
        setIsLoading(false);
      }
    };

    fetchServices();
  }, [searchQuery, carWashId]);

  const handleServiceClick = (service: IService) => {
    if (selectedService === service.serviceid) {
      onSelectedService(null, null);
    } else {
      const serviceItem: IServiceItem = {
        serviceid: service.serviceid,
        name: service.name,
        description: service.description,
        duration: service.duration,
        price: service.price,
      };
      onSelectedService(service.serviceid!, serviceItem);
    }
  };

  if (isLoading) return <div>Загрузка услуг...</div>;
  if (error) return <div>Ошибка: {error}</div>;

  return (
    <ul className="mt-[25px] overflow-y-scroll max-h-[500px]">
      {!services.length
        ? "Услуги в выбранной автомойке не найдены"
        : services.map((service) => (
            <ServiceItem
              key={service.serviceid}
              name={service.name}
              description={service.description}
              duration={service.duration}
              price={service.price}
              className={`transition-all ${
                selectedService === service.serviceid
                  ? "bg-[#E1E5E9] ring-2 ring-[#9AA5B0]"
                  : ""
              }`}
              onClick={() => handleServiceClick(service)}
            />
          ))}
    </ul>
  );
}
