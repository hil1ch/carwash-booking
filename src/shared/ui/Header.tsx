import { Link } from "react-router-dom";
import { IUser } from "./Avatar";
import userImage from "./../../assets/user.png";
import exitSvg from "./../../assets/exit.svg";
import { useAuth } from "../../processes/AuthContext";

export function Header({ name, status }: IUser) {
  const {logout} = useAuth();

  return (
    <div className="flex items-center mt-[20px] justify-between">
      <Link to="/carWashes">
        <p className="text-[14px] font-medium text-[#000000]">Car Washing</p>
      </Link>
      <Link className="flex items-center" to="/profile">
        <img src={userImage}></img>
        <div className="ml-[10px]">
          <p className="text-[#000000]">{name}</p>
          <span className="text-[#ADADAD] text-[14px] font-medium">
            {status}
          </span>
        </div>
      </Link>
      <button type="button" className="cursor-pointer" onClick={logout}>
        <img src={exitSvg}></img>
      </button>
    </div>
  );
}
