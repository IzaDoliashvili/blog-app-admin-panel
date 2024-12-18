import { SingleBlog } from "./index";



export const mapBlogsList = (blogs: SingleBlog[]) => {
  return blogs?.map((blog) => ({
    title_en: blog?.title_en,
    title_ka: blog?.title_ka,
    createdAt: blog?.created_at,
    description_en: blog?.description_en,
    description_ka: blog?.description_ka,
    id: blog?.id,
    key: blog?.id,
  }));
};