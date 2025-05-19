import { useEffect, useState } from "react";
import { CarWash } from "./CarWash";
import { CARWASHES } from "../shared/constants/CarWashesData";
import { ICarWash } from "./CarWash";
import defaultCarWashImage from '../assets/carwash.png';

interface ICarWashesListProps {
  selectedCarWash: string | null;
  onSelectedCarWash: (id: string | null) => void;
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
    fetch('http://45.153.188.106:8000/carwashes/all')
      .then(res => {
        if (!res.ok) throw new Error('Ошибка сети');
        return res.json();
      })
      .then(data => {
        // Add default image if API doesn't provide one
        const carWashesWithImages = data.map((carWash: ICarWash) => ({
          ...carWash,
          image: carWash.image || defaultCarWashImage
        }));
        setCarwashesList(carWashesWithImages);
        setIsLoading(false);
        // Вызываем callback с загруженными данными
        if (onCarWashesLoaded) onCarWashesLoaded(carWashesWithImages);
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
          key={carWash.carwashid}
          name={carWash.name}
          address={carWash.address}
          openingtime={carWash.openingtime}
          closingtime={carWash.closingtime}
          image={carWash.image}
          className={`transition-all ${
            selectedCarWash === carWash.carwashid ? "bg-[#E1E5E9] ring-2 ring-[#9AA5B0]" : ""
          }`}
          onClick={() => onSelectedCarWash(carWash.carwashid!)}
        />
      ))}
    </ul>
  );
}