import { PatientInfo } from "./PatientInfo";
import { usePatients } from "../hooks/usePatients";

export const Patient = ({ patient }) => {
  const { editPatient, deletePatient } = usePatients();

  // showing the patients in UI
  const {
    name,
    age,
    gender,
    email,
    phone,
    address,
    scholarship,
    date,
    reasonForConsultation,
    medicalHistory,
    familyBackground,
    previousTreatments,
    evaluationMentalHealth,
    evaluationRisk,
    objectivesTherapeuticsInitials,
    provisionalDiagnosis,
    evaluationDiagnosis,
    planningTreatment,
    therapeuticInterventions,
    recommendedActivities,
    medicines,
    dose,
    frequency,
    duration,
    discussedTopics,
    therapeuticTechniques,
    progress,
    reviewsTreatment,
    adjustmentsMade,
    treatmentEffectiveness,
    observations,
    importantEvents,
    feedbackPatient,
  } = patient;

  // formating the date
  const formatDate = () => {
    const newDate = new Date(date);
    return new Intl.DateTimeFormat("es-MX", { dateStyle: "long" }).format(
      newDate
    );
  };

  return (
    <>
      <PatientInfo field="Nombre" data={name} />
      {age && <PatientInfo field="Edad" data={age} />}
      {gender && <PatientInfo field="Género" data={gender} />}
      {email && <PatientInfo field="Correo" data={email} />}
      {phone && <PatientInfo field="Telefono" data={phone} />}
      {address && <PatientInfo field="Dirección" data={address} />}
      {scholarship && <PatientInfo field="Escolaridad" data={scholarship} />}
      {date && <PatientInfo field="Fecha" data={formatDate(date)} />}
      {reasonForConsultation && (
        <PatientInfo field="Motivo de Consulta" data={reasonForConsultation} />
      )}
      {medicalHistory && (
        <PatientInfo field="Antecendentes médicos" data={medicalHistory} />
      )}
      {familyBackground && (
        <PatientInfo field="Antecedentes familiares" data={familyBackground} />
      )}
      {previousTreatments && (
        <PatientInfo
          field="Historial de tratamientos anteriores"
          data={previousTreatments}
        />
      )}
      {evaluationMentalHealth && (
        <PatientInfo
          field="Evaluación de la salud mental"
          data={evaluationMentalHealth}
        />
      )}
      {evaluationRisk && (
        <PatientInfo field="Evaluación de riesgo" data={evaluationRisk} />
      )}
      {objectivesTherapeuticsInitials && (
        <PatientInfo
          field="Objetivos terapéuticos iniciales"
          data={objectivesTherapeuticsInitials}
        />
      )}
      {provisionalDiagnosis && (
        <PatientInfo
          field="Diagnóstico provisional"
          data={provisionalDiagnosis}
        />
      )}
      {evaluationDiagnosis && (
        <PatientInfo
          field="Observaciones sobre la evolución del diagnóstico"
          data={evaluationDiagnosis}
        />
      )}
      {planningTreatment && (
        <PatientInfo field="Plan de tratamiento" data={planningTreatment} />
      )}
      {therapeuticInterventions && (
        <PatientInfo
          field="Intervenciones terapéuticas"
          data={therapeuticInterventions}
        />
      )}
      {recommendedActivities && (
        <PatientInfo
          field="Actividades recomendadas entre sesiones"
          data={recommendedActivities}
        />
      )}
      {medicines && (
        <PatientInfo field="Medicamentos recetados" data={medicines} />
      )}
      {dose && <PatientInfo field="Dosis" data={dose} />}
      {frequency && <PatientInfo field="Frecuencia" data={frequency} />}
      {duration && (
        <PatientInfo
          field="Fechas y duración de las sesiones"
          data={duration}
        />
      )}
      {discussedTopics && (
        <PatientInfo field="Temas discutidos" data={discussedTopics} />
      )}
      {therapeuticTechniques && (
        <PatientInfo
          field="Técnicas terapéuticas utilizadas"
          data={therapeuticTechniques}
        />
      )}
      {progress && (
        <PatientInfo
          field="Evaluación del progreso del paciente"
          data={progress}
        />
      )}
      {reviewsTreatment && (
        <PatientInfo
          field="Revisiones del plan de tratamiento"
          data={reviewsTreatment}
        />
      )}
      {adjustmentsMade && (
        <PatientInfo field="Ajustes realizados" data={adjustmentsMade} />
      )}
      {treatmentEffectiveness && (
        <PatientInfo
          field="Evaluación de la efectividad del tratamiento"
          data={treatmentEffectiveness}
        />
      )}
      {observations && (
        <PatientInfo field="Observaciones relevantes" data={observations} />
      )}
      {importantEvents && (
        <PatientInfo
          field="Eventos importantes en la vida del paciente"
          data={importantEvents}
        />
      )}
      {feedbackPatient && (
        <PatientInfo
          field="Feedback del paciente sobre el tratamiento"
          data={feedbackPatient}
        />
      )}
      <button type="button" onClick={() => editPatient(patient)}>
        Editar
      </button>
      <button type="button" onClick={() => deletePatient(patient)}>
        Eliminar
      </button>
    </>
  );
};
