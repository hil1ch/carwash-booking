import { ChooseCarWashItem } from "./ChooseCarWashItem";
import { ChooseServiceItem } from "./ChooseServiceItem";
import { useState } from "react";

interface IFinalChooseBlockProps {
  carNumber?: string;
  onCarNumberChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export function FinalChooseBlock({carNumber, onCarNumberChange}: IFinalChooseBlockProps) {
  const [localCarNumber, setLocalCarNumber] = useState(carNumber || "");
  
  const handleCarNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.toUpperCase();
    
    // Удаляем все пробелы и дефисы, оставляем только буквы и цифры
    const cleanValue = value.replace(/[^АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ0-9]/g, '');
    
    // Форматируем по шаблону _-___-__
    let formattedValue = "";
    
    if (cleanValue.length > 0) {
      formattedValue += cleanValue[0];
    }
    
    if (cleanValue.length > 1) {
      formattedValue += " " + cleanValue.substring(1, 4);
    }
    
    if (cleanValue.length > 4) {
      formattedValue += " " + cleanValue.substring(4, 6);
    }
    
    if (cleanValue.length > 6) {
      formattedValue += " " + cleanValue.substring(6, 8);
    }
    
    // Обрезаем лишние символы
    formattedValue = formattedValue.substring(0, 11); // Максимальная длина A 123 BC 45
    
    setLocalCarNumber(formattedValue);
    
    // Если передан внешний обработчик, вызываем его
    if (onCarNumberChange) {
      // Создаем синтетическое событие с отформатированным значением
      const syntheticEvent = {
        ...e,
        target: {
          ...e.target,
          value: formattedValue
        }
      };
      onCarNumberChange(syntheticEvent);
    }
  };

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
          placeholder="A 123 БВ 45"
          value={localCarNumber}
          onChange={handleCarNumberChange}
          required
        />
      </div>
    </div>
  );
}