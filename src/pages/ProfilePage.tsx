import { Header } from "../shared/ui/Header";
import { Avatar } from "../shared/ui/Avatar";
import ProfileNavigation from "../widgets/ProfileNavigation";

export function ProfilePage() {
  return (
    <div>
      <Header name="Илья Панарин" status="Клиент"/>
      <Avatar name="Илья Панарин" status="Клиент" />
      <ProfileNavigation />
    </div>
  );
}
