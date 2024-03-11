"use client";
import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const checkAuthStatus = () => {
    const token = localStorage.getItem("token"); // Replace with your method of storing the token

    if (token) {
      const decodedUser = JSON.parse(atob(token.split(".")[1]));

      setUser(decodedUser);
      setIsAuthenticated(true);
    } else {
      setUser(null);
      setIsAuthenticated(false);
    }
  };

  useEffect(() => {
    checkAuthStatus();
  }, []);

  const login = (token) => {
    localStorage.setItem("token", token);

    const decodedUser = JSON.parse(atob(token.split(".")[1]));
    setUser(decodedUser);
    setIsAuthenticated(true);
  };

  const logout = () => {
    // Remove the token from localStorage
    localStorage.removeItem("token");
    setUser(null);
    setIsAuthenticated(false);
  };

  const value = {
    user,
    isAuthenticated,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

const useAuth = () => {
  return useContext(AuthContext);
};

export { AuthProvider, useAuth };
