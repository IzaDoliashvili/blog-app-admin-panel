
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BlogsCreateUpdateForm from "../../components/form/create-update";
import BlogsCreateUpdateFormSkeleton from "../../components/form/create-update/skeleton";
import { getSingleBlog } from "../../../../api/blog";

const BlogsUpdateView = () => {
  const { id } = useParams();

  const [blog, setBlog] = useState<{ title_en: string; description_en: string}>({
    title_en: "",
    description_en: "",
  });

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getSingleBlog(id as string)
      .then((res) => {
        setBlog({ title_en: res?.title_en || "", description_en: res?.description_en || "" });
      })
      .finally(() => {
        setTimeout(() => {
          setIsLoading(false);
        }, 2000);
      });
  }, []);

  return (
    <>
      {isLoading ? (
        <BlogsCreateUpdateFormSkeleton />
      ) : (
        <BlogsCreateUpdateForm initialValues={blog} />
      )}
    </>
  );
};

export default BlogsUpdateView;