import { ChangeEvent } from "react";

interface IInput {
  type: string;
  placeholder?: string;
  ref?: React.Ref<HTMLInputElement> | undefined;
  value?: string;
  className: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

export function Input({ type, placeholder, value, ref, className, onChange }: IInput) {
  return (
    <input
      className={className}
      type={type}
      placeholder={placeholder}
      value={value}
      ref={ref}
      onChange={onChange}
      required
    />
  );
}
