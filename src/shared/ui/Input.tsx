interface IInput {
  type: string;
  placeholder?: string;
  ref?: React.Ref<HTMLInputElement> | undefined;
  value?: string;
  className: string;
}

export function Input({ type, placeholder, value, ref, className }: IInput) {
  return (
    <input
      className={className}
      type={type}
      placeholder={placeholder}
      value={value}
      ref={ref}
      required
    />
  );
}
