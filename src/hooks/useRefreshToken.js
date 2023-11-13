import React from "react";
import useAuth from "./useAuth";
import api from "../config/api";
import useLocalStorage from "./useLocalStorage";

const useRefreshToken = () => {
  const { auth, setAuth } = useAuth();
  const [user] = useLocalStorage("user");
  console.log(user);

  const refresh = async () => {
    const response = await api.get(`/users?email=${user}`);
    console.log(response);
    setAuth((prev) => {
      console.log(prev);
      return {
        ...prev,
        role: response.data[0].role,
        accessToken: "response.data.accessToken",
      };
    });
    console.log(auth);
    return "response.data.accessToken";
  };
  return refresh;
};

export default useRefreshToken;
