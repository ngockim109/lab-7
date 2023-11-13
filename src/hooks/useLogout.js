import useAuth from "./useAuth";
import useLocalStorage from "./useLocalStorage";

const useLogout = () => {
  const { setAuth } = useAuth();

  const logout = async () => {
    setAuth({});
    localStorage.clear();
  };

  return logout;
};

export default useLogout;
