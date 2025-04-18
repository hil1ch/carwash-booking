export interface IUser {
    id?: string;
    name: string;
    status: string;
}

export function Avatar({name, status}: IUser) {
    return (
        <div className="flex items-center">
            <img src="src\assets\avatar.png"></img>
            <div className="ml-[15px]">
                <h2 className="text-[28px] font-semibold">{name}</h2>
                <span className="text-[22px] font-medium text-[#ADADAD]">{status}</span>
            </div>
        </div>
    )
}