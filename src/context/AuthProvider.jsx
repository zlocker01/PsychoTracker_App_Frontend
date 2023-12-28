import { useState, useEffect, createContext } from "react";
import { clientAxios } from "../config/axios";

export const AuthContext = createContext(null);

// global state
export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(null);
  const [isCharging, setIsCharging] = useState(true);

  useEffect(() => {
    const authUser = async () => {
      // safe place to save tokens
      const token = localStorage.getItem("psychoTrackerToken");

      if (!token) {
        setIsCharging(false);
        return;
      }

      // axios config to request the profile with the token access
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };

      try {
        const { data } = await clientAxios.get("/psychologist/profile", config);
        setAuth(data);
      } catch (error) {
        console.log(error.response.data.msg);
        //   taking care of user datas setting again
        setAuth(null);
      }

      setIsCharging(false);
    };
    authUser();
  }, []);
  
  const logOut = () => {
    localStorage.removeItem("psychoTrackerToken");
    setAuth(null);
  };

  
  return (
    <AuthContext.Provider
      value={{ auth, setAuth, isCharging, logOut }}
    >
      {children}
    </AuthContext.Provider>
  );
};