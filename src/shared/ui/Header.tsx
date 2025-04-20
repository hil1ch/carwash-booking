import { IUser } from "./Avatar";

export function Header({name, status}: IUser) {
  return (
    <div className="flex items-center mt-[20px] justify-between">
      <a href="#">
         <p className="text-[14px] font-medium text-[#000000]">Car Washing</p>
      </a>
      <div className="flex items-center">
        <a className="flex items-center" href="#">
          <img src="src\assets\user.png"></img>
          <div className="ml-[10px]">
            <p className="text-[#000000]">{name}</p>
            <span className="text-[#ADADAD] text-[14px] font-medium">{status}</span>
          </div>
        </a>
      </div>
      <button type="button" className="cursor-pointer">
         <img src="src\assets\exit.svg"></img>
      </button>
   </div>
  );
}
