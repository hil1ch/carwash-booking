import { Tabs, ConfigProvider } from "antd";
import type { TabsProps } from "antd";
import { ProfilePersonalData } from "./ProfilePersonalData";
import ProfileHistory from "./ProfileHistory";

const onChange = (key: string) => {
  console.log(key);
};

const items: TabsProps["items"] = [
  {
    key: "1",
    label: "Личные данные",
    children: <ProfilePersonalData />,
  },
  {
    key: "2",
    label: "История бронирования",
    children: <ProfileHistory />,
  },
];

const ProfileNavigation: React.FC = () => (
  <ConfigProvider
    theme={{
      components: {
        Tabs: {
          fontSize: 16,
          fontFamily: "Montserrat, sans-serif",
          horizontalItemPadding: '0 32px'
        },
      },
    }}
  >
    <Tabs
      tabBarGutter={730}
      defaultActiveKey="1"
      items={items}
      onChange={onChange}
    />
  </ConfigProvider>
);

export default ProfileNavigation;
