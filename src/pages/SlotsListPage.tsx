import { useState } from "react";

import { Header } from "../shared/ui/Header";
import SlotsList from "../widgets/SlotsList";
import { Button } from "../shared/ui/Button";
import { NewSlotModal } from "../widgets/NewSlotModal";

export function SlotsListPage() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(true);
  }

  const handleClose = () => {
    setIsOpen(false);
  }

  return (
    <div>
      <Header name="Илья Панарин" status="Владелец" />
      <div className="flex justify-end mt-[90px] mb-[30px]">
        <Button
          type="button"
          className="w-[200px] text-[18px] text-white font-medium p-[13px] bg-[#2E4156] border-none rounded-[15px] cursor-pointer hover:bg-[#0F1E2E]"
          disabled={false}
          onClick={handleClick}
        >
          Новый слот
        </Button>
      </div>
      <SlotsList />
      {isOpen && <NewSlotModal onClose={handleClose}/>}
    </div>
  );
}