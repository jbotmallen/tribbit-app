import { Outlet, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

export default function GuestRoute() {
  const currentUser = useSelector((state: RootState) => state.user.currentUser);

  if (currentUser && currentUser.token) {
    return <Navigate to="/dashboard" />;
  }

  return <Outlet />;
}
