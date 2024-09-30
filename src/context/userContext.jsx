import { createContext, useContext, useState } from "react";

const AuthContext = createContext();
export const useAuthContext = () => {
  return useContext(AuthContext);
};
export const AuthContextProvider = ({ children }) => {
    const [isAdmin,setAdmin] =useState(false)
  return <AuthContext.Provider value={{isAdmin,setAdmin}}>{children}</AuthContext.Provider>;
};
