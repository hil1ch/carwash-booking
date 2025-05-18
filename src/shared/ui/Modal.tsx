import closeBtn from "../../assets/closebtn.svg";

interface IModalProps {
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
}

export function Modal({ children, isOpen, onClose }: IModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[1000] bg-gray-500/50">
      <div className="fixed inset-0 flex justify-center items-center">
        <section className="bg-white rounded-[25px] p-[27px_31px] shadow-xl shadow-gray-500/50">
          <div className="flex justify-between items-start">
            <h3 className="mb-[47px] font-medium text-[20px]">
              Опубликовать слот
            </h3>
            <button className="cursor-pointer text-top" onClick={onClose}>
              <img src={closeBtn} alt="Закрыть" />
            </button>
          </div>
          {children}
        </section>
      </div>
    </div>
  );
}
