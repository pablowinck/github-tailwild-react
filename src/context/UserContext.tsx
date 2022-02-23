import { createContext, useContext, useEffect, useState } from "react";

type UserContextType = {
  username: string;
  setUsername: (username: string) => void;
  data: any;
  setData: (data: any) => void;
};

const UserContext = createContext({} as UserContextType);

const UserContextProvider: React.FC = ({ children }) => {
  const [username, setUsername] = useState<string>("pablowinck");
  const [data, setData] = useState<any>();

  useEffect(() => {
    console.log("context data", data);
  }, [data]);

  const value = {
    username: username,
    setUsername: setUsername,
    data: data,
    setData: setData,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export const useUserContext = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error("useUserContext must be used within a UserContextProvider");
  }
  return context;
};

export default UserContextProvider;
