export interface ICarWash {
  id?: number;
  name: string;
  address: string;
  time: string;
  image: string;
  className?: string;
  onClick?: () => void;
}

export function CarWash({ name, address, time, image, className, onClick }: ICarWash) {
  return (
    <li 
      className={`w-full flex border border-[#DDDDDD] rounded-[10px] cursor-pointer shadow-[0_1px_7px_0_rgba(0,0,0,0.2)] mt-[17px] ${className}`}
      onClick={onClick}
    >
      <img className="mr-[19px] w-[130px]" src={image} alt={name}></img>
      <div className="flex flex-col justify-between pt-[15px] pb-[15px] w-full pr-[19px]">
        <h3 className="text-[18px] font-medium">{name}</h3>
        <div className="flex items-center justify-between w-full">
          <div className="flex">
            <img className="mr-[5px]" src="src\assets\geo.svg" alt="Адрес" />
            <p className="text-[#7F7F7F]">{address}</p>
          </div>
          <div className="flex">
            <img className="mr-[5px]" src="src\assets\time.svg" alt="Время работы"></img>
            <span className="text-[#7F7F7F]">{time}</span>
          </div>
        </div>
      </div>
    </li>
  );
}
