import { Input } from "../shared/ui/Input";
import { Button } from "../shared/ui/Button";

export function ClientSignInPage() {
  return (
    <div className="text-center flex flex-col items-center justify-center min-h-screen">
      <form>
        <h1 className="text-[32px] font-medium">Вход</h1>
        <div className="flex flex-col mt-[50px] w-[566px]">
          <label className="text-[18px] font-medium text-[#CCCCCC] text-start">
            Почта
          </label>
          <Input
            className="mt-[7px] text-[16px] text-medium border rounded-[15px] border-[#D5D5D5] p-[17px] placeholder:font-medium placeholder:text-[#CCCC] text-black font-medium"
            type="email"
            placeholder="Введите вашу почту"
          ></Input>
          <label className="mt-[15px] text-[18px] font-medium text-[#CCCCCC] text-start">
            Пароль
          </label>
          <Input
            className="mt-[7px] text-[16px] text-medium border rounded-[15px] border-[#D5D5D5] p-[17px] placeholder:font-medium placeholder:text-[#CCCC] text-black font-medium"
            type="password"
            placeholder="Введите пароль"
          ></Input>
          <a className="text-end mt-[5px] text-[14px]" href="#">
            Забыли пароль?
          </a>
          <Button
            className="mt-[17px] text-[18px] text-white font-medium p-[16px] bg-[#2E4156] border-none rounded-[15px] cursor-pointer hover:bg-[#0F1E2E]"
            disabled={false}
            type="submit"
          >
            Войти
          </Button>
          <p className="mt-[12px] text-[14px] text-center">
            Нет аккаунта?{" "}
            <a href="#" className="ml-[4px]">
              Зарегистрироваться
            </a>
          </p>
        </div>
      </form>
      <div className="flex items-center justify-center mt-[12px]">
         <div className="w-[253px] h-[2px] bg-[#D4D4D4]"></div>
         <span className="text-[#CCCCCC] p-[8px] font-medium">ИЛИ</span>
         <div className="w-[253px] h-[2px] bg-[#D4D4D4]"></div>
      </div>
      <a href="#" className="flex mt-[12px] justify-center border border-[#D5D5D5] rounded-[15px] w-[190px] p-[12px] items-center">Продолжить с <img className="ml-[10px]" src="src\assets\vk.png"></img></a>
    </div>
  );
}
