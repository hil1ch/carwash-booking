import { ChooseCarWashItem } from "./ChooseCarWashItem";
import { ChooseServiceItem } from "./ChooseServiceItem";

export function FinalChooseBlock() {
  return (
    <div className="flex flex-col h-[503px] border border-[#DDDDDD] rounded-[10px] shadow-[0_1px_7px_0_rgba(0,0,0,0.2)] pb-[22px]">
      <h3 className="text-center pt-[15px] font-medium">Ваш выбор</h3>
      <ChooseCarWashItem
        name="Название автомойки"
        address="Мира, 19"
        time="9:00 - 20:00"
        image="src\assets\carwash.png"
      />
      <div className="border border-[#E5E5E5]"></div>
      <ChooseServiceItem
        name="Название услуги"
        description="Описание услуги"
        time="9:00 - 10:00"
        price="300р"
      />
      <div className="pl-[22px] pr-[22px] mt-auto">
        <input
          className="w-full p-[16px] border border-[#E5E5E5] rounded-[15px] placeholder:font-medium"
          type="text"
          placeholder="A 123 BC 45"
          required
        />
      </div>
    </div>
  );
}
