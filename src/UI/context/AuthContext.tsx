import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../database/FirebaseConfig";

export const authContext = createContext(null);

export const useAuth = () =>{
    const context = useContext(authContext);
    return context
} 

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const signUp = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const login = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    };

    const logOut = () => signOut(auth);


    useEffect(() => {
        const observer = onAuthStateChanged(auth, (currentUser) => {
          console.log({ currentUser });
          setUser(currentUser);
          setLoading(false);
        });
        return () => observer();
      }, []);

    return (<authContext.Provider value={{
    login,
    logOut,
    signUp,
    user,
    loading
    }}>
        {children}
    </authContext.Provider>);
}
