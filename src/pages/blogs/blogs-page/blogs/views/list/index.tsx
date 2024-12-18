
import { useEffect, useState } from "react";
import { getBlogList } from "../../../../api/blog";
import { mapBlogsList } from "../../../../api/blog/util";
import BlogsList from "../../components/list";

type Blog = {
  title_en: string;
  createdAt: string;
  description_en: string;
  id: string;
};
const BlogsListView = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);

  useEffect(() => {
    getBlogList().then((blogs) => {
      const mappedBlogs = mapBlogsList(blogs).map((blog) => ({
        ...blog,
        title_en: blog.title_en ?? "", 
        description_en: blog.description_en ?? "",
        id: blog.id.toString(), 
      }));

      setBlogs((prev) => [...prev, ...mappedBlogs]); 
      console.log(mappedBlogs);
    });
  }, []);

  return <BlogsList blogs={blogs} />;
};


export default BlogsListView;