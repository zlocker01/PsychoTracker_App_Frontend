import { createContext, useState, useEffect } from "react";
import { clientAxios } from "../config/axios";

export const PatientContext = createContext();

export const PatientProvider = ({ children }) => {
  // will be avalible patients just
  const [patients, setPatients] = useState([]);
  const [patient, setPatient] = useState({});

  
  useEffect(() => {
    // get patients
    const getPatients = async () => {
      try {
        const token = localStorage.getItem("psychoTrackerToken");
        if (!token) {
          return;
        }
        const config = {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        };
        const { data } = await clientAxios.get("/patient", config);
        setPatients(data);
      } catch (error) {
        console.log(error);
      }
    };
    getPatients();
  }, []);
  
  const savePatient = async (patient) => {
    const token = localStorage.getItem("psychoTrackerToken");
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    // edit or new patinet functions
    if (patient.id) {
      try {
        const { data } = await clientAxios.put(
          `/patient/${patient.id}`,
          patient,
          config
        );
        const updatedPatinet = patients.map(patientSaved => (patientSaved._id === data._id ? data : patientSaved))
        setPatients(updatedPatinet);
        console.log(
          "🚀 ~ file: PatientProvider.jsx:59 ~ savePatient ~ data:",
          data
        );
      } catch (error) {
        console.log(error.response.data.msg);
      }
    } else {
      try {
        const { data } = await clientAxios.post("/patient", patient, config);
        //   deleting properties using rest operator
        const { createdAt, __v, updatedAt, ...savedPatient } = data;
        //   addint a copy of patiens + new patient with spread operator
        setPatients(prevPatients => [savedPatient, ...prevPatients]);
      } catch (error) {
        console.log(error.response.data.msg);
        setPatients([]);
      }
    }
  };

  const editPatient = async (patient) => {
    setPatient(patient);
  };

  return (
    <PatientContext.Provider
      value={{ patients, savePatient, editPatient, patient }}
    >
      { children }
    </PatientContext.Provider>
  );
};
