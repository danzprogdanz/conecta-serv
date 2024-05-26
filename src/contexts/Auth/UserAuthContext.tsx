import React, { createContext, useContext, useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getAuth, User } from "firebase/auth";
import { firebaseConfig } from "../../services/firebase/firebase";
import { signInAction, signOutAction, signUpAction } from "../../services/actions/auth";

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

type AuthContextType = {
  user: User | null;
  logIn: (email: string, password: string) => Promise<void>;
  signUp: (email: string, password: string) => Promise<void>;
  logOut: () => Promise<void>;
};

const initialAuthContext: AuthContextType = {
  user: null,
  logIn: async (email: string, password: string) => {
    throw new Error("logIn function not implemented");
  },
  signUp: async (email: string, password: string) => {
    throw new Error("signUp function not implemented");
  },
  logOut: async () => {
    throw new Error("logOut function not implemented");
  },
};

export const AuthContext = createContext<AuthContextType>(initialAuthContext);

type UserAuthContextProviderProps = {
  children: React.ReactNode;
};

export function UserAuthContextProvider({ children }: UserAuthContextProviderProps) {
  const [user, setUser] = useState<User | null>(() => {
    const storedUser = localStorage.getItem('user');
    return storedUser ? JSON.parse(storedUser) as User : null;
  });

  const handleLogin = (userData: User) => {
    localStorage.setItem('user', JSON.stringify(userData));
    setUser(userData);
  };

  const handleLogout = () => {
    localStorage.removeItem('user');
    setUser(null);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        localStorage.setItem('user', JSON.stringify(currentUser));
      } else {
        localStorage.removeItem('user');
      }
      setUser(currentUser);
    });

    return unsubscribe;
  }, []);

  return (
    <AuthContext.Provider value={{
      user,
      logIn: signInAction,
      signUp: signUpAction,
      logOut: signOutAction
    }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useUserAuth() {
  return useContext(AuthContext);
}
