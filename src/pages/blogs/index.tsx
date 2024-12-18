import { Table } from "antd";

const { Column } = Table;

const BlogsBoard = () => {
  return (
    <Table bordered dataSource={[]}>
      <Column title="Title" dataIndex="title" />
      <Column title="Description" dataIndex="description" />
      <Column title="Created At" dataIndex="createdAt" />
      <Column title="Last Sign In" dataIndex="lastSignIn" />
    </Table>
  );
};

export default BlogsBoard ;