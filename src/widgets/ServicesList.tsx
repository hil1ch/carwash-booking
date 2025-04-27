import { ServiceItem } from "./ServiceItem";
import { SERVICES } from "../shared/constants/ServicesData";

interface IServicesListProps {
  selectedService: number | null;
  onSelectedService: (id: number | null) => void;
}

export function ServicesList({selectedService, onSelectedService}: IServicesListProps) {
  return (
    <ul>
      {SERVICES?.map((service) => (
        <ServiceItem 
          key={service.id}
          name={service.name}
          description={service.description}
          time={service.time}
          price={service.price}
          className={`transition-all ${
            selectedService === service.id ? "bg-[#E1E5E9] ring-2 ring-[#9AA5B0]" : ""
          }`}
          onClick={() => onSelectedService(service.id)}
        />
      ))}
    </ul>
  );
}
