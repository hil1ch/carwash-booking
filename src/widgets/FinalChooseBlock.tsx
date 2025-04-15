import { ICarWash } from "./CarWash";

export function FinalChooseBlock({ name, address, time, image }: ICarWash) {
  return (
    <div className="h-[503px] border border-[#DDDDDD] rounded-[10px] shadow-[0_1px_7px_0_rgba(0,0,0,0.2)]">
      <h3 className="text-center pt-[15px] font-medium">Ваш выбор</h3>
      <div className="p-6 flex pt-[30px]">
        <img className="mr-[15px] w-[110px]" src={image}></img>
        <div className="flex flex-col justify-between pt-[10px] pb-[10px] w-full">
          <h3 className="text-[16px] font-medium">{name}</h3>
          <div className="flex items-center justify-between w-full">
            <div className="flex">
              <img className="mr-[5px]" src="src\assets\geo.svg" />
              <p className="text-[#7F7F7F] text-[14px]">{address}</p>
            </div>
            <div className="flex">
              <img className="mr-[5px]" src="src\assets\time.svg"></img>
              <span className="text-[#7F7F7F] text-[14px]">{time}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="border border-[#E5E5E5]"></div>
    </div>
  );
}
