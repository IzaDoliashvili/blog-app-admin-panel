import { Button, Form, Input } from "antd";
import { useForm } from "antd/es/form/Form";
import { useNavigate, useParams } from "react-router-dom";
import { updateBlog } from "../../../../../api/blog";

const { Item } = Form;

type InitialValues = { title_en: string; description_en: string };

const BlogsCreateUpdateForm: React.FC<{
  // submitCallbackFn: any,
  initialValues?: InitialValues;
}> = ({ initialValues }) => {
  const { id } = useParams();
  const [form] = useForm<InitialValues>();
  const navigate = useNavigate();

  const handleSubmit = (values: { title_en: string; description_en: string }) => {
    updateBlog(id as string, values);

    navigate("/admin-page/blog");
  };

  return (
    <Form<InitialValues>
      initialValues={initialValues}
      form={form}
      onFinish={handleSubmit}
      style={{ maxWidth: 600 }}
    >
      <Item label="Title" name="title" rules={[{ required: true }]}>
        <Input placeholder="Enter title" />
      </Item>

      <Item label="Description" name="description" rules={[{ required: true }]}>
        <Input placeholder="Enter description" />
      </Item>

      <Item label=" ">
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Item>
    </Form>
  );
};

export default BlogsCreateUpdateForm;