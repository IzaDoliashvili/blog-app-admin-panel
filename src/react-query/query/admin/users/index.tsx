import { getUsersListInAdmin, User } from "../../../../pages/admin/api/admin/index";
import { useUsersQueryKeys } from "./hooks/useUsersQueryKeys";
import { useQuery, UseQueryOptions, UseQueryResult } from "@tanstack/react-query";

export const useGetUsersListInAdmin = <T = User[]>({
  queryOptions,
}: {
  queryOptions?: Omit<UseQueryOptions<User[], any, T>, "queryKey">;
} = {}): UseQueryResult<T, any> => {
  const { LIST } = useUsersQueryKeys();

  return useQuery<User[], any, T>({
    queryKey: [LIST],
    queryFn: () => getUsersListInAdmin(),
    ...queryOptions,
  });
};


// import { getUsersListInAdmin, User } from "../../../../pages/admin/api/admin/index";
// import { useUsersQueryKeys } from "./hooks/useUsersQueryKeys";
// import {  useQuery,
//     UseQueryOptions,
//     UseQueryResult,} from "@tanstack/react-query";

// export const useGetUsersListInAdmin = <T>({
//     queryOptions,
//   }: {
//     queryOptions?: Omit<UseQueryOptions<User[], any, T>, "queryKey">;
//   } = {}) : UseQueryResult<T, any> => {
//     const { LIST } = useUsersQueryKeys();
  
//     return useQuery<User[], any, T>({
//       queryKey: [LIST],
//       queryFn: () => getUsersListInAdmin(),
//       ...queryOptions,
//     });
//   };