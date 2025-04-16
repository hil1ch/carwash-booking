import { IService } from "./ServiceItem";

export function ChooseServiceItem({
  name,
  description,
  time,
  price,
}: IService) {
  return (
    <div className="p-6 flex flex-col justify-between pt-[15px] pb-[15px] w-full">
      <div className="flex items-center justify-between">
        <h3 className="text-[16px] font-medium">{name}</h3>
        <span className="text-[14px]">{price}</span>
      </div>
      <div className="flex items-center justify-between w-full mt-[15px]">
        <div className="flex">
          <img className="mr-[5px]" src="src\assets\description.svg" />
          <p className="text-[#7F7F7F] text-[14px]">{description}</p>
        </div>
        <div className="flex">
          <img className="mr-[5px]" src="src\assets\time.svg"></img>
          <span className="text-[#7F7F7F] text-[14px]">{time}</span>
        </div>
      </div>
    </div>
  );
}
