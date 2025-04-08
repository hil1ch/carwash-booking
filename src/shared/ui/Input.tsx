interface IInput {
  type: string;
  placeholder?: string;
  ref?: React.Ref<HTMLInputElement> | undefined;
  value?: string;
}

export function Input({ type, placeholder, value, ref }: IInput) {
  return (
    <input
      className="mt-[7px] text-[16px] text-medium border rounded-[15px] border-[#D5D5D5] p-[17px] placeholder:font-medium placeholder:text-[#CCCC] text-black font-medium"
      type={type}
      placeholder={placeholder}
      value={value}
      ref={ref}
      required
    />
  );
}
