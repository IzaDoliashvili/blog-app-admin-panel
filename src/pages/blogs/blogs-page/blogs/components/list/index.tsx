import { Button, Table } from "antd";
import React, { useState } from "react";
import { EditOutlined, PlusOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import BlogsCreateUpdateForm from "../form/create-update";


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
  const [isCreating, setIsCreating] = useState(false);
  const handleNavigateToBlogEdit = (id: string | number) => {
    navigate(`update/${id}`);
  };

  const handleCreateBlog = () => {
    setIsCreating(true); 
  };

  const handleFormSubmitSuccess = () => {
    setIsCreating(false); 
  };

  return (
    <>
      {isCreating ? (
        <BlogsCreateUpdateForm
          initialValues={{ title_en: "", description_en: "" }} 
          onSubmitSuccess={handleFormSubmitSuccess} 
        />
      ) : (
        <Table
          title={() => (
            <Button
              type="primary"
              icon={<PlusOutlined />}
              onClick={handleCreateBlog}
            >
              Create Blog
            </Button>
          )}
          bordered
          dataSource={blogs}
          rowKey={(record) => record.id}
        >
          <Column<Blog> title="Title" dataIndex="title_en" />
          <Column<Blog> title="Created At" dataIndex="createdAt" />
          <Column<Blog> title="Description" dataIndex="description_en" />
          <Column<Blog>
            title="Actions"
            render={(_, row) => (
              <EditOutlined
                className="cursor-pointer text-xl text-amber-500"
                onClick={() => {
                  handleNavigateToBlogEdit(row?.id);
                }}
              />
            )}
          />
        </Table>
      )}
    </>
  );
};


export default BlogsList;