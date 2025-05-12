import { IService } from "./ServiceItem";
import descriptiomImg from '../assets/description.svg';
import timeImg from '../assets/time.svg';

export function ChooseServiceItem({
  name,
  description,
  time,
  price,
}: IService) {
  return (
    <div className="p-6 flex flex-col justify-between pt-[15px] pb-[15px] w-full">
      <div className="flex items-center justify-between">
        <h3 className="text-[16px] font-medium text-ellipsis whitespace-nowrap max-w-[230px]">{name}</h3>
        <span className="text-[14px]">{price}</span>
      </div>
      <div className="flex items-center justify-between w-full mt-[15px]">
        <div className="flex">
          <img className="mr-[5px]" src={descriptiomImg} />
          <p className="text-[#7F7F7F] text-[14px]">{description}</p>
        </div>
        <div className="flex">
          <img className="mr-[5px]" src={timeImg}></img>
          <span className="text-[#7F7F7F] text-[14px]">{time}</span>
        </div>
      </div>
    </div>
  );
}
