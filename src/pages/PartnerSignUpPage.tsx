import { Input } from "../shared/ui/Input";
import { Button } from "../shared/ui/Button";
import { useMask } from "@react-input/mask";

export function PartnerSignUpPage() {

  const inputRef = useMask({
      mask: "+7 (___) ___-__-__",
      replacement: { _: /\d/ },
  });

  return (
    <div className="flex justify-between text-center items-center min-h-screen mt-[25px] mb-[25px]">
      <img src="src\assets\explaining.svg"></img>
      <form>
        <h1 className="text-[32px] font-medium">Регистрация</h1>
        <div className="flex flex-col mt-[50px] w-[566px]">
          <div className="flex justify-between">
            <div className="flex flex-col w-[270px]">
              <label className="text-[18px] font-medium text-[#CCCCCC] text-start">
                Имя
              </label>
              <Input
                type="text"
                placeholder="Введите ваше имя"
              ></Input>
            </div>
            <div className="flex flex-col w-[270px]">
              <label className="text-[18px] font-medium text-[#CCCCCC] text-start">
                Фамилия
              </label>
              <Input
                type="text"
                placeholder="Введите вашу фамилию"
              ></Input>
            </div>
          </div>
          <label className="mt-[15px] text-[18px] font-medium text-[#CCCCCC] text-start">
            Почта
          </label>
          <Input
            type="email"
            placeholder="Введите вашу почту"
          ></Input>
          <label className="mt-[15px] text-[18px] font-medium text-[#CCCCCC] text-start">
            Телефон
          </label>
          <Input
            type="tel"
            placeholder="+7 (___) ___-__-__" ref={inputRef}
          ></Input>
          <label className="mt-[15px] text-[18px] font-medium text-[#CCCCCC] text-start">
            Адрес автомойки
          </label>
          <Input
            type="text"
            placeholder="Например: г. Еактеринбург, ул. Мира, д. 19"
          ></Input>
          <label className="mt-[15px] text-[18px] font-medium text-[#CCCCCC] text-start">
            Количество окон
          </label>
          <Input
            type="number"
            placeholder="Например: 5"
          ></Input>
          <label className="mt-[15px] text-[18px] font-medium text-[#CCCCCC] text-start">
            Время работы
          </label>
          <div className="flex justify-between items-center">
            <div className="flex flex-col w-[270px]">
              <Input
                type="time"
              ></Input>
            </div>
            <span>—</span>
            <div className="flex flex-col w-[270px]">
              <Input
                type="time"
              ></Input>
            </div>
          </div>
          <Button
            className="mt-[25px] text-[18px] text-white font-medium p-[16px] bg-[#2E4156] border-none rounded-[15px] cursor-pointer hover:bg-[#0F1E2E]"
            disabled={false}
            type="submit"
          >
            Зарегистрироваться
          </Button>
          <p className="mt-[12px] text-[14px] text-center">
            Есть аккаунт?{" "}
            <a href="#" className="ml-[4px]">
              Войти
            </a>
          </p>
        </div>
      </form>
    </div>
  );
}