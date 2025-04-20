import { Header } from "../shared/ui/Header";
import { ServicesList } from "../widgets/ServicesList";
import { Search } from "../shared/ui/Search";
import { Button } from "../shared/ui/Button";
import { FinalChooseBlock } from "../widgets/FinalChooseBlock";

export function ServicesPage() {
  return (
    <div>
      <Header name="Илья Панарин" status="Клиент"/>
      <div className="flex justify-between">
        <div>
          <div className="flex items-center justify-between mt-[90px]">
            <h2 className="w-[250px] text-[18px] font-medium mr-[25px]">
              Выберите услугу
            </h2>
            <Search placeholder="Найти услугу" />
          </div>
          <ServicesList />
        </div>
        <div className="w-full mt-[90px] ml-[35px]">
          <FinalChooseBlock/>
          <Button
            type="button"
            className="w-full mt-[17px] text-[16px] text-white font-medium p-[16px] bg-[#2E4156] border-none rounded-[15px] cursor-pointer hover:bg-[#0F1E2E]"
            disabled={false}
          >
            Продолжить
          </Button>
        </div>
      </div>
    </div>
  );
}
