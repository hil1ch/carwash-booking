import { Header } from "../shared/ui/Header";
import { Search } from "../shared/ui/Search";
import { Button } from "../shared/ui/Button";
// import { Map } from "../shared/ui/Map";
import { CarWashesList } from "../widgets/CarWashesList";

export function CarWashesPage() {
  return (
    <div>
      <Header />
      <div className="">
        <div>
          <div className="flex items-center justify-between mt-[90px]">
            <h2 className="w-[250px] text-[18px] font-medium mr-[25px]">
              Выберите автомойку
            </h2>
            <Search placeholder="Найти автомойку" />
          </div>
          <CarWashesList />
        </div>
        {/* <Map defaultState={{ center: [55.75, 37.57], zoom: 9 }}/> */}
      </div>
      <Button
        type="button"
        className=" w-full mt-[17px] text-[16px] text-white font-medium p-[16px] bg-[#2E4156] border-none rounded-[15px] cursor-pointer hover:bg-[#0F1E2E]"
        disabled={false}
      >
        Продолжить
      </Button>
    </div>
  );
}
