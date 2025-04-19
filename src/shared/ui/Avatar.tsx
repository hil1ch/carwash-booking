export interface IUser {
    id?: string;
    name: string;
    status: string;
}

export function Avatar({name, status}: IUser) {
    return (
        <div className="flex items-center justify-center mt-[90px] mb-[10px]">
            <img src="src\assets\avatar.png" className="w-[100px]"></img>
            <div className="ml-[15px]">
                <h2 className="text-[22px] font-semibold">{name}</h2>
                <span className="text-[18px] font-medium text-[#ADADAD]">{status}</span>
            </div>
        </div>
    )
}