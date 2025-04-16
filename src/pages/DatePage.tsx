import { Header } from "../shared/ui/Header";
import { FinalChooseBlock } from "../widgets/FinalChooseBlock";
import { Button } from "../shared/ui/Button";

export function DatePage() {
  return (
    <div>
      <Header />
      <div className="flex justify-between">
        <div>
          <h2 className="w-[250px] text-[18px] font-medium mr-[25px] mt-[90px]">
            Выберите время
          </h2>
        </div>
        
        <div className="w-full mt-[90px] ml-[35px]">
          <FinalChooseBlock />
          <Button
            type="button"
            className="w-full mt-[17px] text-[16px] text-white font-medium p-[16px] bg-[#2E4156] border-none rounded-[15px] cursor-pointer hover:bg-[#0F1E2E]"
            disabled={false}
          >
            Забронировать
          </Button>
        </div>
      </div>
    </div>
  );
}
