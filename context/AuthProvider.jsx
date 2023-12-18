import { useState, useEffect, createContext } from "react";
import { clientAxios } from "../src/config/axios";

export const AuthContext = createContext(null);
// global state
export const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState(null);

    useEffect(() => {
      const authUser = async () => {
        // safe place to save tokens
        const token = localStorage.getItem("psychoTrackerToken");

        if (!token) {
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

      };
      authUser();

    }, []);

  return <AuthContext.Provider value={{auth, setAuth}}>{children}</AuthContext.Provider>;
};
