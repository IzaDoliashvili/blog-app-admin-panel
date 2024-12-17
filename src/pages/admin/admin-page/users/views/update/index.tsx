
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getSingleUserInAdmin } from "../../../../api/admin";
import UsersCreateUpdateFormSkeleton from "../../components/form/create-update/skeleton";
import UsersCreateUpdateForm from "../../components/form/create-update";

const UsersUpdateView = () => {
  const { id } = useParams();

  const [user, setUser] = useState<{ email: string; phone: string }>({
    email: "",
    phone: "",
  });

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getSingleUserInAdmin(id as string)
      .then((res) => {
        setUser({ email: res?.email || "", phone: res?.phone || "" });
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
        <UsersCreateUpdateFormSkeleton />
      ) : (
        <UsersCreateUpdateForm initialValues={user} />
      )}
    </>
  );
};

export default UsersUpdateView;