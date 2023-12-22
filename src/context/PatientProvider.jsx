import { createContext, useState, useEffect, Children } from "react";
import { clientAxios } from "../config/axios";

export const PatientContext = createContext();

export const PatientProvider = () => {
  return (
    <PatientContext.Provider
    value={{
        
    }}>
        {children}
    </PatientContext.Provider>
  )
}
