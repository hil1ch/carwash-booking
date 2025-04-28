import { Link } from "react-router-dom";

export function StartPage() {
  const buttonStyle =
    "text-[20px] font-medium pt-[20px] pb-[20px] w-[215px] border-none rounded-[15px] bg-[#1A2D42] text-white cursor-pointer hover:bg-[#0F1E2E]";

  return (
    <div className="mx-auto text-center flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl w-[780px] font-medium">
        Единая система-приложение бронирования автомоек
      </h1>
      <p className="text-xl mt-[34px] mb-[40px]">
        Быстрая запись — безупречный блеск!
      </p>
      <div className="flex gap-8 justify-center">
        <Link type="button" className={buttonStyle} to="/clientLogin">
          Для клиентов
        </Link>
        <Link type="button" className={buttonStyle} to="/partnerLogin">
          Для владельцев
        </Link>
      </div>
    </div>
  );
}
