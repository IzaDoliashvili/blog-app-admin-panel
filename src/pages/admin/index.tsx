import { Table } from "antd";

const { Column } = Table;

const AdminBoard = () => {
  return (
    <Table bordered dataSource={[]}>
      <Column title="Email" dataIndex="email" />
      <Column title="Created At" dataIndex="createdAt" />
      <Column title="Phone" dataIndex="phone" />
      <Column title="Last Sign In" dataIndex="lastSignIn" />
    </Table>
  );
};

export default AdminBoard;