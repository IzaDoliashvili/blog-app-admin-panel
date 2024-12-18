
import { useEffect, useState } from "react";
import { getUsersListInAdmin } from "../../../../api/admin";
import { mapUsersListForAdmin } from "../../../../api/admin/util";
import UsersList from "../../components/list";

const UsersListView = () => {
  const [users, setUsers] = useState<
    {
      email: string;
      createdAt: string;
      phone: string;
      lastSignIn: string;
      id: string;
    }[]
    >([
    {
      email: "johntsaava@gmail.com",
      createdAt: "2024-12-09T15:41:44.976105Z",
      phone: "555888999",
      lastSignIn: "2024-12-09T15:41:44.976105Z",
      id: "raghac id",
    },
  ]);
;

  useEffect(() => {
    getUsersListInAdmin().then((users) => {
      const mappedUsers = mapUsersListForAdmin(users);

      setUsers(() => {
        return [ ...mappedUsers];
      });
    });
  }, []);

  return <UsersList users={users} />;
};

export default UsersListView;