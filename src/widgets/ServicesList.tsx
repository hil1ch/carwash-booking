import { ServiceItem } from "./ServiceItem";

export function ServicesList() {
  return (
    <ul>
      <ServiceItem
        name="Название услуги"
        description="Описание услуги"
        time="9:00 - 10:00"
        price="500р"
      />
      <ServiceItem
        name="Название услуги"
        description="Описание услуги"
        time="9:00 - 10:00"
        price="400р"
      />
      <ServiceItem
        name="Название услуги"
        description="Описание услуги"
        time="9:00 - 10:00"
        price="300р"
      />
      <ServiceItem
        name="Название услуги"
        description="Описание услуги"
        time="9:00 - 10:00"
        price="300р"
      />
    </ul>
  );
}
