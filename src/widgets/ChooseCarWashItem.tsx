import { ICarWash } from "./CarWash";
import geoImg from '../assets/geo.svg';
import timeImg from '../assets/time.svg';

export function ChooseCarWashItem({ name, address, openingtime, closingtime, image }: ICarWash) {
  return (
    <div className="p-6 flex pt-[30px]">
      <img className="mr-[15px] w-[110px]" src={image}></img>
      <div className="flex flex-col justify-between pt-[10px] pb-[10px] w-full">
        <h3 className="text-[16px] font-medium overflow-hidden text-ellipsis whitespace-nowrap max-w-[230px]">{name}</h3>
        <div className="flex items-center justify-between w-full">
          <div className="flex">
            <img className="mr-[5px]" src={geoImg} />
            <p className="text-[#7F7F7F] text-[14px]">{address}</p>
          </div>
          <div className="flex">
            <img className="mr-[5px]" src={timeImg}></img>
            <span className="text-[#7F7F7F] text-[14px]">{openingtime} - {closingtime}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
