import { CarWash } from "./CarWash";

export function CarWashesList() {
  return (
    <ul className="mt-[25px]">
      <CarWash
        name="Название автомойки"
        address="Мира, 19"
        time="9:00 - 20:00"
        image="src\assets\carwash.png"
      />
      <CarWash
        name="Название автомойки"
        address="Мира, 19"
        time="9:00 - 20:00"
        image="src\assets\carwash.png"
      />
      <CarWash
        name="Название автомойки"
        address="Мира, 19"
        time="9:00 - 20:00"
        image="src\assets\carwash.png"
      />
    </ul>
  );
}
