import React, { useEffect, useState } from "react";
import useRefreshToken from "../../../hooks/useRefreshToken";
import useAuth from "../../../hooks/useAuth";
import { Outlet } from "react-router-dom";
import useLocalStorage from "../../../hooks/useLocalStorage";

const PersistLogin = () => {
  const [isLoading, setIsLoading] = useState(true);
  const refresh = useRefreshToken();
  const { auth, user } = useAuth();
  const [persist] = useLocalStorage("persist", false);
  useEffect(() => {
    let isMounted = true;

    const verifyRefreshToken = async () => {
      try {
        await refresh();
      } catch (err) {
        console.error(err);
      } finally {
        isMounted && setIsLoading(false);
      }
    };

    // persist added here AFTER tutorial video
    // Avoids unwanted call to verifyRefreshToken
    !auth?.accessToken && persist ? verifyRefreshToken() : setIsLoading(false);

    return () => (isMounted = false);
  }, []);
  useEffect(() => {
    console.log(`isLoading: ${isLoading}`);
  }, [isLoading]);
  return (
    <>{!persist ? <Outlet /> : isLoading ? <p>Loading...</p> : <Outlet />}</>
  );
};

export default PersistLogin;
