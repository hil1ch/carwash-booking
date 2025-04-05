interface IInput {
  type: string;
  placeholder: string;
  className: string;
  value?: string;
}

export function Input({ type, placeholder, className, value }: IInput) {
  return (
    <input className={className} type={type} placeholder={placeholder} value={value} />
  );
}
