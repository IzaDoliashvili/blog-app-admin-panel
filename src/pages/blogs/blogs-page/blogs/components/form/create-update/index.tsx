import { Button, Form, Input } from "antd";
import { useForm } from "antd/es/form/Form";
import { useNavigate, useParams } from "react-router-dom";
import { updateBlog, createBlog } from "../../../../../api/blog"; 

const { Item } = Form;

type InitialValues = { title_en: string; description_en: string };

const BlogsCreateUpdateForm: React.FC<{
  initialValues?: InitialValues;
  onSubmitSuccess?: () => void; 
}> = ({ initialValues, onSubmitSuccess }) => {
  const { id } = useParams();
  const [form] = useForm<InitialValues>();
  const navigate = useNavigate();

  const handleSubmit = async (values: InitialValues) => {
    try {
      if (id) {
        await updateBlog(id as string, values);
      } else {
        await createBlog(values);
      }

      onSubmitSuccess?.();

      navigate("/admin-page/blog");
    } catch (error) {
      console.error("Failed to submit the blog form:", error.message);
    }
  };

  return (
    <Form<InitialValues>
      initialValues={initialValues}
      form={form}
      onFinish={handleSubmit}
      style={{ maxWidth: 600 }}
    >
      <Item label="Title" name="title_en" rules={[{ required: true }]}>
        <Input placeholder="Enter title" />
      </Item>

      <Item label="Description" name="description_en" rules={[{ required: true }]}>
        <Input.TextArea placeholder="Enter description" />
      </Item>

      <Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Item>
    </Form>
  );
};

export default BlogsCreateUpdateForm;

