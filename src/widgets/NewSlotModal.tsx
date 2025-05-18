import { Input } from "../shared/ui/Input";
import { Button } from "../shared/ui/Button";
import { Modal } from "../shared/ui/Modal";

interface INewSlotProps {
    onClose: () => void;
}

export function NewSlotModal({onClose}: INewSlotProps) {
  return (
    <Modal isOpen={true} onClose={onClose}>
      <div className="flex flex-col w-[566px]">
        <label className="text-[18px] font-medium text-[#CCCCCC] text-start">
            Выберите автомойку
        </label>
        <select className="mt-[7px] text-[16px] text-medium border rounded-[15px] border-[#D5D5D5] p-[17px] placeholder:font-medium placeholder:text-[#CCCC] text-black font-medium mb-[20px]">
          <option></option>
          <option></option>
          <option></option>
        </select>
        <label className="text-[18px] font-medium text-[#CCCCCC] text-start">
            Выберите услугу
        </label>
        <select className="mt-[7px] text-[16px] text-medium border rounded-[15px] border-[#D5D5D5] p-[17px] placeholder:font-medium placeholder:text-[#CCCC] text-black font-medium mb-[20px]">
          <option></option>
          <option></option>
          <option></option>
        </select>
        <label className="text-[18px] font-medium text-[#CCCCCC] text-start">
            Цена
        </label>
        <Input
          placeholder="100"
          type="number"
          className="mt-[7px] text-[16px] text-medium border rounded-[15px] border-[#D5D5D5] p-[17px] placeholder:font-medium placeholder:text-[#CCCC] text-black font-medium mb-[20px]"
        ></Input>
        <label className="text-[18px] font-medium text-[#CCCCCC] text-start">
            Дата
        </label>
        <Input
          className="mt-[7px] text-[16px] text-medium border rounded-[15px] border-[#D5D5D5] p-[17px] placeholder:font-medium placeholder:text-[#CCCC] text-black font-medium mb-[20px]"
          type="date"
        ></Input>
        <label className="text-[18px] font-medium text-[#CCCCCC] text-start">
            Длительность
        </label>
        <Input
          className="mt-[7px] text-[16px] text-medium border rounded-[15px] border-[#D5D5D5] p-[17px] placeholder:font-medium placeholder:text-[#CCCC] text-black font-medium mb-[20px]"
          type="time"
        ></Input>
        <Button
          disabled={true}
          className="text-[18px] text-white font-medium p-[16px] bg-[#2E4156] border-none rounded-[15px] cursor-pointer hover:bg-[#0F1E2E]"
        >
          Опубликовать
        </Button>
      </div>
    </Modal>
  );
}
