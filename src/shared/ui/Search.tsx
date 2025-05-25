import { useState, ChangeEvent } from "react";

interface ISearch {
  placeholder: string;
  onSearch: (query: string) => void;
}

export function Search({ placeholder, onSearch }: ISearch) {
  const [searchValue, setSearchValue] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchValue(value);
    onSearch(value);
  };

  return (
    <input
      type="search"
      value={searchValue}
      className="w-full border-none rounded-[40px] bg-[#EBEBEB] pl-[14px] pt-[10px] pb-[10px] placeholder:font-medium"
      placeholder={placeholder}
      onChange={handleChange}
    />
  );
}