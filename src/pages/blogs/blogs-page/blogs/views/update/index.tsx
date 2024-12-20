
import { useParams } from "react-router-dom";
import BlogsCreateUpdateForm from "../../components/form/create-update";
import BlogsCreateUpdateFormSkeleton from "../../components/form/create-update/skeleton";
import { useGetSingleBlog } from "../../../../../../react-query/query/admin/blogs";

const BlogsUpdateView = () => {
  const { id } = useParams();


  const { data: blog, isLoading } = useGetSingleBlog({
    id: id as string,
  });

  return (
    <>
      {isLoading ? (
        <BlogsCreateUpdateFormSkeleton />
      ) : (
        <BlogsCreateUpdateForm initialValues={{
          title_en: blog?.title_en || "",
          description_en: blog?.description_en || "",
        }} />
      )}
    </>
  );
};

export default BlogsUpdateView;