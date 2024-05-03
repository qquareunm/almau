"use client";
import { createContext, useState, useContext } from "react";

interface AuthContextType {
  isRegistered: boolean;
  setIsRegistered: React.Dispatch<React.SetStateAction<boolean>>;
  registerUser: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: any) => {
  const [isRegistered, setIsRegistered] = useState<boolean>(false);
  const registerUser = () => {
    setIsRegistered(true);
  };
  return (
    <AuthContext.Provider
      value={{ isRegistered, setIsRegistered, registerUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
