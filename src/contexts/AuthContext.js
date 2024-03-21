"use client";
import { useRouter } from "next/navigation";
import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const router = useRouter();

  const checkAuthStatus = () => {
    const token = localStorage.getItem("token");

    if (token) {
      const decodedUser = JSON.parse(atob(token.split(".")[1]));
      const tokenExp = decodedUser.exp * 1000; // Convert expiration time to milliseconds
      const currentTime = new Date().getTime();

      // console.log(
      //   "decodeUser",
      //   decodedUser,
      //   new Date(tokenExp).getTime(),
      //   currentTime,
      //   new Date(tokenExp).getTime() - currentTime
      // );

      if (tokenExp > currentTime) {
        setUser(decodedUser);
        setIsAuthenticated(true);
      } else {
        // Token has expired, redirect the user to the login page
        logout();
        router.push("/signin");
      }
    } else {
      setUser(null);
      setIsAuthenticated(false);
    }
  };

  useEffect(() => {
    checkAuthStatus();
  }, [router]);

  const login = (token) => {
    localStorage.setItem("token", token);

    const decodedUser = JSON.parse(atob(token.split(".")[1]));
    setUser(decodedUser);
    setIsAuthenticated(true);
  };

  function logout() {
    localStorage.removeItem("token");
    setUser(null);
    setIsAuthenticated(false);
  }

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
