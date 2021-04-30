import { useRouter } from "next/router";
import React, { ReactNode } from "react";

interface IUserProviderProps {
  children: React.ReactNode;
}

interface IPropsContext {
  data: {
    name: string;
    email?: string;
  };
  isAuth: boolean;
  logout: () => void;
  login: () => void;
  redirectIfFound: (url: string) => void;
}

export const UserContext = React.createContext({} as IPropsContext);

export const UserProvider = ({ children }: IUserProviderProps) => {
  const router = useRouter();
  const [data, setData] = React.useState(null);
  const [isAuth, setIsAuth] = React.useState(false);

  const loadData = React.useCallback(() => {
    const storage = JSON.parse(localStorage.user_test);
    if (storage.user) {
      setData(storage.user);
      setIsAuth(true);
    } else {
      setIsAuth(false);
      setData(null);
      router.push("/");
    }
    return data;
  }, []);

  React.useEffect(() => {
    loadData();
  }, []);

  function logout() {
    const confirmLogout = confirm("Deseja realmente sair?");
    if (!confirmLogout) return;
    const storage = JSON.parse(localStorage.user_test);
    if (storage) {
      storage.user = null;
      localStorage.user_test = JSON.stringify(storage);
    }
    loadData();
    router.push("/");
  }

  function login() {
    loadData();
  }

  function redirectIfFound(url: string) {
    isAuth && router.push(url);
  }
  return (
    <UserContext.Provider
      value={{ data, isAuth, logout, login, redirectIfFound }}
    >
      {children}
    </UserContext.Provider>
  );
};
