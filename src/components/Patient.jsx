import { PatientInfo } from "./PatientInfo";

export const Patient = ({ patient }) => {
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

  return (
    <>
      <PatientInfo field="Nombre" data={name} />
      <PatientInfo field="Edad" data={age} />
      <PatientInfo field="Género" data={gender} />
      <PatientInfo field="Correo" data={email} />
      <PatientInfo field="Telefono" data={phone} />
      <PatientInfo field="Dirección" data={address} />
      <PatientInfo field="Escolaridad" data={scholarship} />
      <PatientInfo field="Fecha" data={date} />
      <PatientInfo field="Motivo de Consulta" data={reasonForConsultation} />
      <PatientInfo field="Antecendentes médicos" data={medicalHistory} />
      <PatientInfo field="Antecedentes familiares" data={familyBackground} />
      <PatientInfo field="Historial de tratamientos anteriores" data={previousTreatments} />
      <PatientInfo field="Evaluación de la salud mental" data={evaluationMentalHealth} />
      <PatientInfo field="Evaluación de riesgo" data={evaluationRisk} />
      <PatientInfo field="Objetivos terapéuticos iniciales" data={objectivesTherapeuticsInitials} />
      <PatientInfo field="Diagnóstico provisional" data={provisionalDiagnosis} />
      <PatientInfo field="Observaciones sobre la evolución del diagnóstico" data={evaluationDiagnosis} />
      <PatientInfo field="Plan de tratamiento" data={planningTreatment} />
      <PatientInfo field="Intervenciones terapéuticas" data={therapeuticInterventions} />
      <PatientInfo field="Actividades recomendadas entre sesiones" data={recommendedActivities} />
      <PatientInfo field="Medicamentos recetados" data={medicines} />
      <PatientInfo field="Dosis" data={dose} />
      <PatientInfo field="Frecuencia" data={frequency} />
      <PatientInfo field="Fechas y duración de las sesiones" data={duration} />
      <PatientInfo field="Temas discutidos" data={discussedTopics} />
      <PatientInfo field="Técnicas terapéuticas utilizadas" data={therapeuticTechniques} />
      <PatientInfo field="Evaluación del progreso del paciente" data={progress} />
      <PatientInfo field="Revisiones del plan de tratamiento" data={reviewsTreatment} />
      <PatientInfo field="Ajustes realizados" data={adjustmentsMade} />
      <PatientInfo field="Evaluación de la efectividad del tratamiento" data={treatmentEffectiveness} />
      <PatientInfo field="Observaciones relevantes" data={observations} />
      <PatientInfo field="Eventos importantes en la vida del paciente" data={importantEvents} />
      <PatientInfo field="Feedback del paciente sobre el tratamiento" data={feedbackPatient} />
    </>
  );
};
