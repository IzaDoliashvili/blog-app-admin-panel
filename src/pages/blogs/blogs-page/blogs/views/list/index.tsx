import { mapBlogsList } from "../../../../api/blog/util";
import BlogsList from "../../components/list";
import { useGetBlogList } from "../../../../../../react-query/query/admin/blogs";

const BlogsListView = () => {
 

  const { data: blogs } = useGetBlogList({
    queryOptions: { select: mapBlogsList },
  });

  return <BlogsList blogs={blogs || [] } />;
};


export default BlogsListView;