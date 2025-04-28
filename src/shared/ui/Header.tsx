import { Link } from "react-router-dom";
import { IUser } from "./Avatar";
import userImage from './../../assets/user.png'; 
import exitSvg from './../../assets/exit.svg';

export function Header({name, status}: IUser) {
  return (
    <div className="flex items-center mt-[20px] justify-between">
      <Link to="/carWashes">
         <p className="text-[14px] font-medium text-[#000000]">Car Washing</p>
      </Link>
      <Link className="flex items-center" to="/profile">
        <a className="flex items-center" href="#">
          <img src={userImage}></img>
          <div className="ml-[10px]">
            <p className="text-[#000000]">{name}</p>
            <span className="text-[#ADADAD] text-[14px] font-medium">{status}</span>
          </div>
        </a>
      </Link>
      <button type="button" className="cursor-pointer">
         <img src={exitSvg}></img>
      </button>
   </div>
  );
}
