import { CarWash } from "./CarWash";
import { CARWASHES } from "../shared/constants/CarWashesData";

interface ICarWashesListProps {
  selectedCarWash: number | null;
  onSelectedCarWash: (id: number | null) => void;
}

export function CarWashesList({selectedCarWash, onSelectedCarWash}: ICarWashesListProps) {
  return (
    <ul className="mt-[25px]">
      {CARWASHES?.map((carWash) => (
        <CarWash
          key={carWash.id}
          name={carWash.name}
          address={carWash.address}
          time={carWash.time}
          image={carWash.image}
          className={`transition-all ${
            selectedCarWash === carWash.id ? "bg-[#E1E5E9] ring-2 ring-[#9AA5B0]" : ""
          }`}
          onClick={() => onSelectedCarWash(carWash.id)}
        />
      ))}
    </ul>
  );
}
