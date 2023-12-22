import { createContext, useState, useEffect } from "react";
import { clientAxios } from "../config/axios";

export const PatientContext = createContext();

export const PatientProvider = ({ children }) => {
  // will be avalible patients just
  const [patients, setPatient] = useState(null);

  const savePatient = async (patient) => {
    try {
      const token = localStorage.getItem("psychoTrackerToken");
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };
      const { data } = await clientAxios.post("/patient", patient, config);
      //   deleting properties using rest operator
      const { createdAt, __v, updatedAt, ...savedPatient } = data;
      //   addint a copy of patiens + new patient with spread operator
      setPatient([savedPatient, ...patients]);
    } catch (error) {
      console.log(error.response.data.msg);
      setPatient(null);
    }
  };

  return (
    <PatientContext.Provider value={{ patients, savePatient }}>
      {children}
    </PatientContext.Provider>
  );
};
