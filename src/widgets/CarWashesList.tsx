import { useEffect, useState } from "react";
import { CarWash } from "./CarWash";
import { CARWASHES } from "../shared/constants/CarWashesData";
import { ICarWash } from "./CarWash";

interface ICarWashesListProps {
  selectedCarWash: number | null;
  onSelectedCarWash: (id: number | null) => void;
  onCarWashesLoaded?: (carWashes: ICarWash[]) => void;
}

export function CarWashesList({
  selectedCarWash,
  onSelectedCarWash,
  onCarWashesLoaded
}: ICarWashesListProps) {
  const [carWashesList, setCarwashesList] = useState<ICarWash[]>(CARWASHES);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch('https://b6781a3024c0920c.mokky.dev/carWashes')
      .then(res => {
        if (!res.ok) throw new Error('Ошибка сети');
        return res.json();
      })
      .then(data => {
        setCarwashesList(data);
        setIsLoading(false);
        // Вызываем callback с загруженными данными
        if (onCarWashesLoaded) onCarWashesLoaded(data);
      })
      .catch(error => {
        setError(error.message);
        setIsLoading(false);
      });
  }, [onCarWashesLoaded]);

  if (isLoading) return <div>Загрузка автомоек...</div>;
  if (error) return <div>Ошибка: {error}</div>;

  return (
    <ul className="mt-[25px] overflow-y-scroll max-h-[500px]">
      {carWashesList?.map((carWash) => (
        <CarWash
          key={carWash.id}
          name={carWash.name}
          address={carWash.address}
          time={carWash.time}
          image={carWash.image}
          className={`transition-all ${
            selectedCarWash === carWash.id ? "bg-[#E1E5E9] ring-2 ring-[#9AA5B0]" : ""
          }`}
          onClick={() => onSelectedCarWash(carWash.id!)}
        />
      ))}
    </ul>
  );
}