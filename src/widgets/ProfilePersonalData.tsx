import { Input } from "../shared/ui/Input";
import { Button } from "../shared/ui/Button";
import { useMask } from "@react-input/mask"

export function ProfilePersonalData() {

  const inputRef = useMask({
    mask: "+7 (___) ___-__-__",
    replacement: { _: /\d/ },
  });

  return (
    <div>
      <div className="flex justify-between">
        <div className="flex flex-col w-[550px]">
          <Input className="text-[16px] text-medium border rounded-[15px] border-[#D5D5D5] p-[17px] placeholder:font-medium placeholder:text-[#CCCC] text-black font-medium" type="text" placeholder="Имя"/>
          <Input className="mt-[15px] text-[16px] text-medium border rounded-[15px] border-[#D5D5D5] p-[17px] placeholder:font-medium placeholder:text-[#CCCC] text-black font-medium" type="text" placeholder="Фамилия"/>
        </div>
        <div className="flex flex-col w-[550px]">
          <Input className="text-[16px] text-medium border rounded-[15px] border-[#D5D5D5] p-[17px] placeholder:font-medium placeholder:text-[#CCCC] text-black font-medium" type="email" placeholder="Почта" />
          <Input className="mt-[15px] text-[16px] text-medium border rounded-[15px] border-[#D5D5D5] p-[17px] placeholder:font-medium placeholder:text-[#CCCC] text-black font-medium" type="text" placeholder="+7 (___) ___-__-__" ref={inputRef}/>
        </div>
      </div>
      <Button type="submit" className="w-[200px] mt-[17px] text-[16px] text-white font-medium p-[16px] bg-[#2E4156] border-none rounded-[15px] cursor-pointer hover:bg-[#0F1E2E]" disabled={true}>Сохранить</Button>
    </div>
  );
}
