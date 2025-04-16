export function BookedModal() {
  return (
    <div className="fixed inset-0 z-[1000]">
      <div className="fixed inset-0 bg-[#676767] bg-opacity-50 flex justify-center items-center">
        <section className="bg-white rounded-[25px] p-[37px_57px] mx-auto text-center">
          <h2 className="text-[26px] font-medium ">
            Заявка отправлена на бронь
          </h2>
          <p className="mt-[10px] text-[#8B8B8B] mb-[56px]">
            Следите за её статусом в личном кабинете
          </p>
          <div className="pb-[10px]">
            <a className="p-[17px] rounded-[15px] bg-[#2E4156] border-none font-medium !text-white cursor-pointer hover:bg-[#0F1E2E]">
              Личный кабинет
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
