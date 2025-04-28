import { Input } from "../shared/ui/Input";
import { Button } from "../shared/ui/Button";
import { useMask } from "@react-input/mask"
import { Link } from "react-router-dom";

export function ClientSignUpPage() {

  const inputRef = useMask({
      mask: "+7 (___) ___-__-__",
      replacement: { _: /\d/ },
  });

  return (
    <div className="flex justify-between text-center items-center min-h-screen mt-[25px] mb-[25px]">
      <img src="src\assets\car.svg"></img>
      <form>
        <h1 className="text-[32px] font-medium">Регистрация</h1>
        <div className="flex flex-col mt-[50px] w-[566px]">
          <div className="flex justify-between">
            <div className="flex flex-col w-[270px]">
              <label className="text-[18px] font-medium text-[#CCCCCC] text-start">
                Имя
              </label>
              <Input
                className="mt-[7px] text-[16px] text-medium border rounded-[15px] border-[#D5D5D5] p-[17px] placeholder:font-medium placeholder:text-[#CCCC] text-black font-medium"
                type="text"
                placeholder="Введите ваше имя"
              ></Input>
            </div>
            <div className="flex flex-col w-[270px]">
              <label className="text-[18px] font-medium text-[#CCCCCC] text-start">
                Фамилия
              </label>
              <Input
                className="mt-[7px] text-[16px] text-medium border rounded-[15px] border-[#D5D5D5] p-[17px] placeholder:font-medium placeholder:text-[#CCCC] text-black font-medium"
                type="text"
                placeholder="Введите вашу фамилию"
              ></Input>
            </div>
          </div>
          <label className="mt-[15px] text-[18px] font-medium text-[#CCCCCC] text-start">
            Почта
          </label>
          <Input
            className="mt-[7px] text-[16px] text-medium border rounded-[15px] border-[#D5D5D5] p-[17px] placeholder:font-medium placeholder:text-[#CCCC] text-black font-medium"
            type="email"
            placeholder="Введите вашу почту"
          ></Input>
          <label className="mt-[15px] text-[18px] font-medium text-[#CCCCCC] text-start">
            Телефон
          </label>
          <Input
            className="mt-[7px] text-[16px] text-medium border rounded-[15px] border-[#D5D5D5] p-[17px] placeholder:font-medium placeholder:text-[#CCCC] text-black font-medium"
            type="text"
            placeholder="+7 (___) ___-__-__" ref={inputRef}
          ></Input>
          <label className="mt-[15px] text-[18px] font-medium text-[#CCCCCC] text-start">
            Пароль
          </label>
          <Input
            className="mt-[7px] text-[16px] text-medium border rounded-[15px] border-[#D5D5D5] p-[17px] placeholder:font-medium placeholder:text-[#CCCC] text-black font-medium"
            type="password"
            placeholder="Введите пароль"
          ></Input>
          <label className="mt-[15px] text-[18px] font-medium text-[#CCCCCC] text-start">
            Подтвердите пароль
          </label>
          <Input
            className="mt-[7px] text-[16px] text-medium border rounded-[15px] border-[#D5D5D5] p-[17px] placeholder:font-medium placeholder:text-[#CCCC] text-black font-medium"
            type="password"
            placeholder="Введите пароль еще раз"
          ></Input>
          <Button
            className="mt-[25px] text-[18px] text-white font-medium p-[16px] bg-[#2E4156] border-none rounded-[15px] cursor-pointer hover:bg-[#0F1E2E]"
            disabled={false}
            type="submit"
          >
            Зарегистрироваться
          </Button>
          <p className="mt-[12px] text-[14px] text-center">
            Есть аккаунт?{" "}
            <Link to="/clientLogin" className="ml-[4px] text-[#646cff] hover:text-[#4e53ac]">
              Войти
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
}
