import { Header } from "../shared/ui/Header";
import { Avatar } from "../shared/ui/Avatar";
import ProfileNavigation from "../widgets/ProfileNavigation";

export function ProfilePage() {
  return (
    <div>
      <Header />
      <Avatar name="Илья Панарин" status="Клиент" />
      <ProfileNavigation />
    </div>
  );
}
