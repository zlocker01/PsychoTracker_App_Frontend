import { useContext } from "react";
import { PatientContext } from "../context/PatientProvider";

export function usePatients() {
    // custom hook for patients
  return useContext(PatientContext);
}
