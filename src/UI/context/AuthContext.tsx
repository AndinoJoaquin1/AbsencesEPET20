import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../database/FirebaseConfig";

export const authContext = createContext(null);

export const useAuth = () => {
  const context = useContext(authContext);
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [messageError, setMessageError] = useState("");

  const signUp = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => signOut(auth);

  const getError = (error) => {
    switch (error.code) {
      case "auth/invalid-email":
        setMessageError("Correo electronico invalido");
        break;
      case "auth/weak-password":
        setMessageError("Contraseña muy corta, debe de ser de por al menos 7 caracteres");
        break;
      case "auth/wrong-password":
        setMessageError("Contraseña incorrecta");
        break;
      case "auth/email-already-in-use":
        setMessageError("Email en uso");
        break;
      default:
        setMessageError("Error desconocido");
        break;
    }
    return messageError;
  };

  useEffect(() => {
    const observer = onAuthStateChanged(auth, (currentUser) => {
      console.log({ currentUser });
      setUser(currentUser);
      setLoading(false);
    });
    return () => observer();
  }, []);

  return (
    <authContext.Provider
      value={{
        login,
        logOut,
        signUp,
        user,
        loading,
        getError,
      }}
    >
      {children}
    </authContext.Provider>
  );
};
