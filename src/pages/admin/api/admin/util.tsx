import { User } from "./index";



export const mapUsersListForAdmin = (users: User[]) => {
  return users?.map((user) => ({
    email: user?.email,
    createdAt: user?.created_at,
    phone: user?.phone,
    lastSignIn: user?.last_sign_in_at,
    id: user?.id,
    key: user?.id,
  }));
};