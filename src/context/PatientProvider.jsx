import { createContext, useState, useEffect } from "react";
import { clientAxios } from "../config/axios";
import { useAuth } from "../hooks/useAuth";

export const PatientContext = createContext();

export const PatientProvider = ({ children }) => {
  // will be avalible patients just
  const [patients, setPatients] = useState([]);
  const [patient, setPatient] = useState({});

  const { auth } = useAuth();

  // token and Axios congif for request
  const token = localStorage.getItem("psychoTrackerToken");
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };

  useEffect(() => {
    // get patients
    const getPatients = async () => {
      try {
        if (!token) {
          return;
        }
        const { data } = await clientAxios.get("/patient", config);
        setPatients(data);
      } catch (error) {
        console.log(error);
      }
    };
    getPatients();
  }, [auth]);

  const savePatient = async (patient) => {
    // edit or new patinet functions
    if (patient.id) {
      try {
        const { data } = await clientAxios.put(
          `/patient/${patient.id}`,
          patient,
          config
        );
        const updatedPatinet = patients.map((patientSaved) =>
          patientSaved._id === data._id ? data : patientSaved
        );
        setPatients(updatedPatinet);
      } catch (error) {
        console.log(error.response.data.msg);
      }
    } else {
      try {
        const { data } = await clientAxios.post("/patient", patient, config);
        //   deleting properties using rest operator
        const { createdAt, __v, updatedAt, ...savedPatient } = data;
        //   addint a copy of patiens + new patient with spread operator
        setPatients((prevPatients) => [savedPatient, ...prevPatients]);
      } catch (error) {
        console.log(error.response.data.msg);
        setPatients([]);
      }
    }
  };

  const editPatient = async (patient) => {
    setPatient(patient);
  };

  const deletePatient = async (patient) => {
    const confirmationDelete = confirm(
      `¿Estás seguro que deseas eliminar a tu paciente ${patient.name}?`
    );
    if (confirmationDelete) {
      try {
        const { data } = await clientAxios.delete(
          `/patient/${patient._id}`,
          config
        );
        const patientsUpdate = patients.filter(patientsState => patientsState._id !== patient._id);
        setPatients(patientsUpdate);
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <PatientContext.Provider
      value={{ patients, savePatient, editPatient, patient, deletePatient }}
    >
      {children}
    </PatientContext.Provider>
  );
};