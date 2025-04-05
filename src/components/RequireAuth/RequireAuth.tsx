import { Navigate, Outlet } from "react-router-dom";
import userStore from "../../zustand/UserStore/UserStore";
import { useQuery } from "@tanstack/react-query";

interface RefreshTokenResponse {
  user: {
    name: string;
    watchList: string[];
    _id: string;
  };
  accessToken: string;
}

const RequireAuth = () => {
  const {
    isAuthenticated,
    setUser,
    setIsAuthenticated,
    setWatchList,
    setAccessToken,
    setUserId,
  } = userStore();

  const { isLoading, data, error, isError } = useQuery<RefreshTokenResponse>({
    queryKey: ["Auth"],
    queryFn: async () => {
      const response = await fetch("http://localhost:8001/user/refresh-token", {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        credentials: "include",
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData?.message || "Not Authenticated");
      }
      return response.json();
    },
    enabled: !isAuthenticated,
    retry: false,
  });

  if (isAuthenticated) {
    return <Outlet />;
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    console.log(error.message);
    return <Navigate to={"/login"} />;
  }

  if (data) {
    setIsAuthenticated(true);
    setUser(data.user.name);
    setAccessToken(data.accessToken);
    setWatchList(data.user.watchList);
    setUserId(data.user._id);
    return <Outlet />;
  }

  return <Navigate to="/login" />;
};

export default RequireAuth;
