import { Tabs, ConfigProvider } from "antd";
import type { TabsProps } from "antd";

const onChange = (key: string) => {
  console.log(key);
};

const items: TabsProps["items"] = [
  {
    key: "1",
    label: "Личный кабинет",
    children: "Content of Tab Pane 1",
  },
  {
    key: "2",
    label: "История бронирования",
    children: "Content of Tab Pane 2",
  },
];

const ProfileNavigation: React.FC = () => (
  <ConfigProvider
    theme={{
      components: {
        Tabs: {
          fontSize: 16,
          fontFamily: "Montserrat, sans-serif",
        },
      },
    }}
  >
    <Tabs tabBarGutter={64} defaultActiveKey="1" items={items} onChange={onChange} />
  </ConfigProvider>
);

export default ProfileNavigation;
