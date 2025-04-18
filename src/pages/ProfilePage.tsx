import { Header } from "../shared/ui/Header";
import { Avatar } from "../shared/ui/Avatar";
import ProfileNavigation from "../widgets/ProfileNavigation";

export function ProfilePage() {
    return (
        <div>
            <Header />
            <div className="mt-[90px] flex justify-between">
                <Avatar name="Илья Панарин" status="Клиент"/>
                <ProfileNavigation />
            </div>
        </div>
    )
}