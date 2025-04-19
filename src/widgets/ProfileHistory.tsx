import { Table } from "antd";
import type { TableColumnsType } from "antd";
import { createStyles } from "antd-style";

const useStyle = createStyles(({ css, token }) => {
  const { antCls } = token;
  return {
    customTable: css`
      ${antCls}-table {
        thead > tr > th {
          font-size: 16px;
          font-weight: 600;
          color: #333;
          font-family: "Montserrat", sans-serif;
        }
        tbody > tr > td {
          font-size: 14px;
          font-weight: 400;
          color: #666;
          font-family: 'Montserrat', sans-serif;
        }
        ${antCls}-table-container {
          ${antCls}-table-body,
          ${antCls}-table-content {
            scrollbar-width: thin;
            scrollbar-color: #eaeaea transparent;
            scrollbar-gutter: stable;
          }
        }
      }
    `,
  };
});

interface IHistoryType {
  key: React.Key;
  name: string;
  address: string;
  service: string;
  startTime: string;
  endTime: string;
  status: string;
}

const columns: TableColumnsType<IHistoryType> = [
  {
    title: "Автомойка",
    width: 200,
    dataIndex: "name",
    key: "name",
    fixed: "left",
  },
  {
    title: "Адрес",
    width: 200,
    dataIndex: "address",
    key: "address",
    fixed: "left",
  },
  {
    title: "Услуга",
    dataIndex: "service",
    key: "1",
    width: 200,
  },
  {
    title: "Время начала",
    dataIndex: "startTime",
    key: "2",
    width: 150,
  },
  {
    title: "Время окончания",
    dataIndex: "endTime",
    key: "3",
    width: 150,
  },
  {
    title: "Статус",
    key: "status",
    fixed: "right",
    width: 200,
    render: () => (
      <span className="bg-[#FFF0BB] p-1 border-none rounded-[30px]">
        Ждет подтверждения
      </span>
    ),
  },
];

const dataSource = Array.from({ length: 10 }).map<IHistoryType>((_, i) => ({
  key: i,
  name: `Название автомойки`,
  address: `Адрес`,
  service: "Название услуги",
  startTime: "11:00",
  endTime: "12:00",
  status: "Ждет подтверждения",
}));

const ProfileHistory: React.FC = () => {
  const { styles } = useStyle();
  return (
    <Table<IHistoryType>
      className={styles.customTable}
      columns={columns}
      dataSource={dataSource}
      scroll={{ x: "max-content", y: 55 * 5 }}
    />
  );
};

export default ProfileHistory;
