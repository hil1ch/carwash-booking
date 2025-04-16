import { ICarWash } from "./CarWash";

export function ChooseCarWashItem({ name, address, time, image }: ICarWash) {
  return (
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
  );
}
