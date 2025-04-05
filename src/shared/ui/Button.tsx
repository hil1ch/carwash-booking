interface IButton {
  type?: "submit" | "reset" | "button" | undefined;
  className: string
  children: string;
  disabled: boolean;
  onClick?: () => void;
}

export function Button({ type, className, onClick, children, disabled = false }: IButton) {
  return (
    <button type={type} className={className} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
}
