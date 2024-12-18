import { Button, Table } from "antd";
import React from "react";
import { EditOutlined, PlusOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const { Column } = Table;

type Blog = {
  title_en: string;
  createdAt: string;
  description_en: string;
  id: string | number;
};

const BlogsList: React.FC<{
  blogs: Blog[];
}> = ({ blogs }) => {
  const navigate = useNavigate();

  const handleNavigateToBlogEdit = (id: string | number) => {
    navigate(`update/${id}`);
  };

  return (
    <Table
      title={() => (
        <Button type="primary" icon={<PlusOutlined />}>
          Create User
        </Button>
      )}
      bordered
      dataSource={blogs}
    >
      <Column<Blog> title="Title" dataIndex="title_en" />
      <Column<Blog> title="Created At" dataIndex="createdAt" />
      <Column<Blog> title="Description" dataIndex="description_en" />
      <Column<Blog>
        title="Actions"
        render={(_, row) => {
          return (
            <EditOutlined
              className="cursor-pointer text-xl text-amber-500"
              onClick={() => {
                handleNavigateToBlogEdit(row?.id);
              }}
            />
          );
        }}
      />
    </Table>
  );
};

export default BlogsList;