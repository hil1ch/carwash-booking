import { useState, ChangeEvent } from "react";
import { Input } from "../shared/ui/Input";
import { Button } from "../shared/ui/Button";
import { useMask } from "@react-input/mask";
import { Link } from "react-router-dom";
import personImg from '../assets/explaining.svg'

export function PartnerSignUpPage() {
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [partnerEmail, setPartnerEmail] = useState('');
  const [address, setAddress] = useState('');
  const [windows, setWindows] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');

  const inputRef = useMask({
      mask: "+7 (___) ___-__-__",
      replacement: { _: /\d/ },
  });

  return (
    <div className="flex justify-between text-center items-center min-h-screen mt-[25px] mb-[25px]">
      <img src={personImg}></img>
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
                value={name}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
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
                value={lastName}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setLastName(e.target.value)}
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
            value={partnerEmail}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setPartnerEmail(e.target.value)}
          ></Input>
          <label className="mt-[15px] text-[18px] font-medium text-[#CCCCCC] text-start">
            Телефон
          </label>
          <Input
            className="mt-[7px] text-[16px] text-medium border rounded-[15px] border-[#D5D5D5] p-[17px] placeholder:font-medium placeholder:text-[#CCCC] text-black font-medium"
            type="tel"
            placeholder="+7 (___) ___-__-__" ref={inputRef}
            value={phoneNumber}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setPhoneNumber(e.target.value)}
          ></Input>
          <label className="mt-[15px] text-[18px] font-medium text-[#CCCCCC] text-start">
            Адрес автомойки
          </label>
          <Input
            className="mt-[7px] text-[16px] text-medium border rounded-[15px] border-[#D5D5D5] p-[17px] placeholder:font-medium placeholder:text-[#CCCC] text-black font-medium"
            type="text"
            placeholder="Например: г. Еактеринбург, ул. Мира, д. 19"
            value={address}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setAddress(e.target.value)}
          ></Input>
          <label className="mt-[15px] text-[18px] font-medium text-[#CCCCCC] text-start">
            Количество окон
          </label>
          <Input
            className="mt-[7px] text-[16px] text-medium border rounded-[15px] border-[#D5D5D5] p-[17px] placeholder:font-medium placeholder:text-[#CCCC] text-black font-medium"
            type="number"
            placeholder="Например: 5"
            value={windows}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setWindows(e.target.value)}
          ></Input>
          <label className="mt-[15px] text-[18px] font-medium text-[#CCCCCC] text-start">
            Время работы
          </label>
          <div className="flex justify-between items-center">
            <div className="flex flex-col w-[270px]">
              <Input
                className="mt-[7px] text-[16px] text-medium border rounded-[15px] border-[#D5D5D5] p-[17px] placeholder:font-medium placeholder:text-[#CCCC] text-black font-medium"
                type="time"
                value={startTime}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setStartTime(e.target.value)}
              ></Input>
            </div>
            <span>—</span>
            <div className="flex flex-col w-[270px]">
              <Input
                className="mt-[7px] text-[16px] text-medium border rounded-[15px] border-[#D5D5D5] p-[17px] placeholder:font-medium placeholder:text-[#CCCC] text-black font-medium"
                type="time"
                value={endTime}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setEndTime(e.target.value)}
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
            <Link to="/partnerLogin" className="ml-[4px] text-[#646cff] hover:text-[#4e53ac]">
              Войти
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
}