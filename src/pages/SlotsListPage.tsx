import { Header } from "../shared/ui/Header";
import SlotsList from "../widgets/SlotsList";
import { Button } from "../shared/ui/Button";

export function SlotsListPage() {
  return (
    <div>
      <Header name="Илья Панарин" status="Владелец" />
      <div className="flex justify-end mt-[90px] mb-[30px]">
        <Button
          type="button"
          className="w-[200px] text-[18px] text-white font-medium p-[14px] bg-[#2E4156] border-none rounded-[15px] cursor-pointer hover:bg-[#0F1E2E]"
          disabled={false}
        >
          Новый слот
        </Button>
      </div>
      <SlotsList />
    </div>
  );
}