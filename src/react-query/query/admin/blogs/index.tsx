
import { getBlogList, Blog, getSingleBlog,  } from "../../../../pages/blogs/api/blog";
import { useBlogsQueryKeys } from "./hook/useBlogsQueryKeys";
import {  useQuery, UseQueryOptions, UseQueryResult } from "@tanstack/react-query";

export const useGetBlogList = <T = Blog[]>({
  queryOptions,
}: {
  queryOptions?: Omit<UseQueryOptions<Blog[], any, T>, "queryKey">;
} = {}): UseQueryResult<T, any> => {
  const { LIST } = useBlogsQueryKeys();
  return useQuery<Blog[], any, T>({
    queryKey: [LIST],
    queryFn: () => getBlogList(),
    ...queryOptions,
  });
};

export const useGetSingleBlog = <T = Blog>({
  id,
  queryOptions,
}: {
  id: string; 
  queryOptions?: Omit<UseQueryOptions<Blog, any, T>, "queryKey">;
}): UseQueryResult<T, any> => {
  const { SINGLE } = useBlogsQueryKeys();

  return useQuery<Blog, any, T>({
    queryKey: [SINGLE, id], 
    queryFn: () => getSingleBlog(id), 
    ...queryOptions,
  });
};


{/* export const useUpdateBlog = ({
  mutationOptions,
}: {
  mutationOptions?: UseMutationOptions<Blog, any, { id: string; data: Partial<Blog> }>;
} = {}): UseMutationResult<Blog, any, { id: string; data: Partial<Blog> }> => {
  return useMutation<Blog, any, { id: string; data: Partial<Blog> }>(
    ({ id:, data }) => updateBlog(id, data), 
    mutationOptions
  );
}; */}

{/* export const useUpdateBlog  = <T = Blog>({
  id,
  queryOptions,
}: {
  id: string; 
  queryOptions?: Omit<UseQueryOptions<Blog, any, T>, "queryKey">;
}): UseQueryResult<T, any> => {
  const { UPDATE } = updateBlog();

  return useQuery<Blog, any, T>({
    queryKey: [UPDATE, id], 
    queryFn: () => getSingleBlog(id), 
    ...queryOptions,
  });
}; */}