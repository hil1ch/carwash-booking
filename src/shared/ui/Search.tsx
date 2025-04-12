interface ISearch {
   placeholder: string;
}

export function Search({placeholder}: ISearch) {
   return (
      <input type="search" className="w-full border-none rounded-[40px] bg-[#EBEBEB] pl-[14px] pt-[10px] pb-[10px] placeholder:font-medium" placeholder={placeholder} />
   )
}