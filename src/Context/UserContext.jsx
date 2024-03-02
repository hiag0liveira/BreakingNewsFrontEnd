import { createContext, useState, useEffect } from "react";
import { userLogged } from "../services/userServices";
import { Loading } from "../components/Loading/Loading";

export const UserContext = createContext();

export default function UserProvider({ children }) {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  async function loadUser() {
    setIsLoading(true);
    try {
      const response = await userLogged();
      setUser(response.data);
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  }

  useEffect(() => {
    loadUser();
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}