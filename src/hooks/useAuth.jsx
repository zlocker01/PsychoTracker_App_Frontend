import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";

export function useAuth() {
    // custom hook for psychologist profile
  return useContext(AuthContext);
}
