import descriptionImg from '../assets/description.svg';
import timeImg from '../assets/time.svg';

export interface IService {
  serviceid?: string;
  name: string;
  description: string;
  duration: number;
  price?: string;
  className?: string;
  onClick?: () => void;
  carwashid?: string;
}

export function ServiceItem({
  name,
  description,
  duration,
  price,
  className,
  onClick,
}: IService) {
  return (
    <li
      className={`w-[730px] h-[98px] flex border border-[#DDDDDD] rounded-[10px] cursor-pointer shadow-[0_1px_7px_0_rgba(0,0,0,0.2)] mt-[17px] ${className}`}
      onClick={onClick}
    >
      <div className="flex flex-col justify-between pt-[15px] pb-[15px] w-full pr-[19px]">
        <div className="flex items-center justify-between">
          <h3 className="text-[18px] font-medium pl-[19px]">{name}</h3>
          <span>{price}</span>
        </div>
        <div className="flex items-center justify-between w-full">
          <div className="flex pl-[19px]">
            <img className="mr-[5px]" src={descriptionImg} />
            <p className="text-[#7F7F7F]">{description}</p>
          </div>
          <div className="flex">
            <img className="mr-[5px]" src={timeImg}></img>
            <span className="text-[#7F7F7F]">{duration}</span>
          </div>
        </div>
      </div>
    </li>
  );
}
