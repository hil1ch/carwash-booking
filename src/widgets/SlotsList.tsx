import { Table, Button, Space } from "antd";
import type { TableColumnsType } from "antd";
import { createStyles } from "antd-style";
import type { GlobalToken } from 'antd/es/theme/interface';

export interface IExtendedToken extends GlobalToken {
  antCls: string;
}

const useStyle = createStyles(({ css, token }) => {
  const { antCls } = token as IExtendedToken;
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
  service: string;
  car: string;
  time: string;
  status: string;
}

const columns: TableColumnsType<IHistoryType> = [
  {
    title: "Клиент",
    width: 200,
    dataIndex: "name",
    key: "name",
    fixed: "left",
  },
  {
    title: "Услуга",
    width: 200,
    dataIndex: "service",
    key: "service",
    fixed: "left",
  },
  {
    title: "Номер авто",
    dataIndex: "car",
    key: "1",
    width: 150,
  },
  {
    title: "Время обслуживания",
    dataIndex: "time",
    key: "2",
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
  {
    title: "Действия",
    key: "actions",
    fixed: "right",
    width: 200,
    render: () => (
      <Space size="small">
        <Button 
          type="primary" 
          style={{ background: '#52c41a', borderColor: '#52c41a' }}
        >
          Подтвердить
        </Button>
        <Button 
          danger 
        >
          Отклонить
        </Button>
      </Space>
    ),
  },
];

const dataSource = Array.from({ length: 10 }).map<IHistoryType>((_, i) => ({
  key: i,
  name: `Имя Фамилия`,
  service: "Название услуги",
  car: 'А 123 БВ 45',
  time: "11:00-12:00",
  status: "Ждет подтверждения",
}));

const SlotsList: React.FC = () => {
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

export default SlotsList;