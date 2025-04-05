interface IButton {
   className: string
   children: string;
   disabled: boolean;
   onClick?: () => void;
}

export function Button({ className, onClick, children, disabled = false }: IButton) {
  return (
    <button className={className} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
}
