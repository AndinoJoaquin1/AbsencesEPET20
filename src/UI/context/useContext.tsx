import { createContext, useContext } from "react";

export const authContext = createContext({});

export const useAuth = () =>{
    const context = useContext(authContext);
    return context
} 

export const AuthProvider = ({children}) => {
    const user ={};
    return <authContext.Provider value={{user}}>{children}</authContext.Provider>;
}
