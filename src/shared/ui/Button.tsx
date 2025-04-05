interface IButton {
  children: string;
  disabled: boolean;
  onClick?: () => void;
}

export function Button({ onClick, children, disabled = false }: IButton) {
  return (
    <button className="" onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
}
