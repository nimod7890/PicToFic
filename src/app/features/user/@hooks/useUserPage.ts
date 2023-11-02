import { useParams } from "react-router-dom";
import useGetUserByUserId from "../../../hooks/user/useGetUserByUserId";

export default function useUserPage() {
  const { userId } = useParams();
  const { user } = useGetUserByUserId({ id: userId as string });

  return { user };
}
