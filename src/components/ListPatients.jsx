import { usePatients } from "../hooks/usePatients";
import { Patient } from "./Patient";

export const ListPatients = () => {
  const { patients } = usePatients();
  return (
    <>
      <h2>Lista de Pacientes</h2>
      <div>
        {patients.length ? (
          patients.map((patient) => (
            <Patient key={patient._id} patient={patient} />
          ))
        ) : (
          <h3>Todavia no tienes pacientes registrados</h3>
        )}
      </div>
    </>
  );
};
