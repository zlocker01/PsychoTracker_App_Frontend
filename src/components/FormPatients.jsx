import { useState } from "react";
import { InputWithLabel } from "./InputWithLabel";
import { TextareaWithLabel } from "./TextareaWithLabel";

export const FormPatients = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [scholarship, setScholarship] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [reasonForConsultation, setReasonForConsultation] = useState("");
  const [medicalHistory, setMedicalHistory] = useState("");
  const [familyBackground, setFamilyBackground] = useState("");
  const [previousTreatments, setPreviousTreatments] = useState("");
  const [evaluationMentalHealth, setEvaluationMentalHealth] = useState("");
  const [evaluationRisk, setEvaluationRisk] = useState("");
  const [objectivesTherapeuticsInitials, setObjectivesTherapeuticsInitials] = useState("");
  const [provisionalDiagnosis, setProvisionalDiagnosis] = useState("");
  const [evaluationDiagnosis, setEvaluationDiagnosis] = useState("");
  const [planningTreatment, setPlanningTreatment] = useState("");
  const [therapeuticInterventions, setTherapeuticInterventions] = useState("");
  const [recommendedActivities, setRecommendedActivities] = useState("");
  const [medicines, setMedicines] = useState("");
  const [dose, setDose] = useState("");
  const [frequency, setFrequency] = useState("");
  const [duration, setDuration] = useState("");
  const [discussedTopics, setDiscussedTopics] = useState("");
  const [therapeuticTechniques, setTherapeuticTechniques] = useState("");
  const [progress, setProgress] = useState("");
  const [reviewsTreatment, setReviewsTreatment] = useState("");
  const [adjustmentsMade, setAdjustmentsMade] = useState("");
  const [treatmentEffectiveness, setTreatmentEffectiveness] = useState("");
  const [observations, setObservations] = useState("");
  const [importantEvents, setImportantEvents] = useState("");
  const [feedbackPatient, setFeedbackPatient] = useState("");
  const [alert, setAlert] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // form patinet validation
    if(name === "") {
        setAlert("El Nombre es el único campo obligatorio");
    }
    
    try {
        await 
    } catch (error) {
        setAlert(error.response.data.msg);
    }
  }

  return (
    <>
      <h2>Añade un Nuevo Paciente</h2>
      <form onSubmit={handleSubmit}>
      <p>{alert}</p>
        <details>
          <summary>Información personal básica:</summary>
          <div>
            <InputWithLabel
              label={"Nombre"}
              placeholder={"Nombre del paciente"}
              value={name}
              onchange={setName}
            />
          </div>
          <div>
            <InputWithLabel
              label={"Edad"}
              placeholder={"Edad actual"}
              value={age}
              onchange={setAge}
            />
          </div>
          <div>
            <InputWithLabel
              label={"Género"}
              placeholder={"Identificación de género del paciente"}
              value={gender}
              onchange={setGender}
            />
          </div>
          <div>
            <InputWithLabel
              label={"Escolaridad"}
              placeholder={"Grado academico del paciente"}
              value={scholarship}
              onchange={setScholarship}
            />
          </div>
          <div>
            <InputWithLabel
              label={"Telefono"}
              placeholder={"Número de contacto del paciente"}
              value={phone}
              onchange={setPhone}
            />
          </div>
          <div>
            <InputWithLabel
              label={"Correo"}
              placeholder={"Dirección de correo electrónico del paciente"}
              value={email}
              onchange={setEmail}
            />
          </div>
          <div>
            <InputWithLabel
              label={"Dirección"}
              placeholder={"Dirección de fisica del paciente"}
              value={address}
              onchange={setAddress}
            />
          </div>
        </details>
        <details>
          <summary>Historial clinico:</summary>
          <div>
            <TextareaWithLabel
              label={"Motivo de consulta"}
              placeholder={"Motivo principal de consulta"}
              value={reasonForConsultation}
              onchange={setReasonForConsultation}
            />
          </div>
          <div>
            <TextareaWithLabel
              label={"Antecedentes médicos"}
              placeholder={"Historia de la salud física del paciente"}
              value={medicalHistory}
              onchange={setMedicalHistory}
            />
          </div>
          <div>
            <TextareaWithLabel
              label={"Antecedentes familiares"}
              placeholder={"Salud de familiares cercanos"}
              value={familyBackground}
              onchange={setFamilyBackground}
            />
          </div>
          <div>
            <TextareaWithLabel
              label={"Historial de tratamientos anteriores"}
              placeholder={"Registro de tratamientos previos"}
              value={previousTreatments}
              onchange={setPreviousTreatments}
            />
          </div>
        </details>
        <details>
          <summary>Evaluación inicial:</summary>
          <div>
            <TextareaWithLabel
              label={"Evaluación de la salud mental"}
              placeholder={"Evaluación general del estado mental del paciente"}
              value={evaluationMentalHealth}
              onchange={setEvaluationMentalHealth}
            />
          </div>
          <div>
            <TextareaWithLabel
              label={"Evaluación de riesgo"}
              placeholder={
                "Evaluación de posibles amenazas a la salud mental del paciente"
              }
              value={evaluationRisk}
              onchange={setEvaluationRisk}
            />
          </div>
          <div>
            <TextareaWithLabel
              label={"Objetivos terapéuticos iniciales"}
              placeholder={"Metas iniciales para la terapia"}
              value={objectivesTherapeuticsInitials}
              onchange={setObjectivesTherapeuticsInitials}
            />
          </div>
        </details>
        <details>
          <summary>Diagnostico:</summary>
          <div>
          <TextareaWithLabel
              label={"Diagnóstico provisional"}
              placeholder={"Evaluación inicial del estado del paciente"}
              value={provisionalDiagnosis}
              onchange={setProvisionalDiagnosis}
            />
          </div>
          <div>
          <TextareaWithLabel
              label={"Observaciones sobre la evolución del diagnóstico"}
              placeholder={"Notas sobre cambios en el diagnóstico"}
              value={evaluationDiagnosis}
              onchange={setEvaluationDiagnosis}
            />
          </div>
        </details>
        <details>
          <summary>Tratamiento y planificación:</summary>
          <div>
          <TextareaWithLabel
              label={"Plan de tratamiento"}
              placeholder={"Estrategias y metas terapéuticas"}
              value={planningTreatment}
              onchange={setPlanningTreatment}
          />
          </div>
          <div>
          <TextareaWithLabel
              label={"Intervenciones terapéuticas"}
              placeholder={"Acciones específicas para abordar los problemas"}
              value={therapeuticInterventions}
              onchange={setTherapeuticInterventions}
          />
          </div>
          <div>
          <TextareaWithLabel
              label={"Actividades recomendadas entre sesiones"}
              placeholder={"Tareas sugeridas para realizar fuera de las sesiones"}
              value={recommendedActivities}
              onchange={setRecommendedActivities}
          />
          </div>
        </details>
        <details>
          <summary>Medicación:</summary>
          <div>
          <TextareaWithLabel
              label={"Medicamentos recetados"}
              placeholder={"Lista de medicamentos y sus nombres"}
              value={medicines}
              onchange={setMedicines}
          />
          </div>
          <div>
          <TextareaWithLabel
              label={"Dosis"}
              placeholder={"Indicaciones sobre la dosis"}
              value={dose}
              onchange={setDose}
          />
          </div>
          <div>
          <TextareaWithLabel
              label={"Frecuencia"}
              placeholder={"Indicaciones sobre cómo tomar la medicación"}
              value={frequency}
              onchange={setFrequency}
          />
          </div>
        </details>
        <details>
          <summary>Sesiones y notas de progreso:</summary>
          <div>
          <TextareaWithLabel
              label={"Fechas y duración de las sesiones"}
              placeholder={"Registro temporal de las sesiones terapéuticas"}
              value={duration}
              onchange={setDuration}
          />
          </div>
          <div>
          <TextareaWithLabel
              label={"Temas discutidos"}
              placeholder={"Temas abordados durante las sesiones"}
              value={discussedTopics}
              onchange={setDiscussedTopics}
          />
          </div>
          <div>
          <TextareaWithLabel
              label={"Técnicas terapéuticas utilizadas"}
              placeholder={"Métodos específicos empleados en la terapia"}
              value={therapeuticTechniques}
              onchange={setTherapeuticTechniques}
          />
          </div>
          <div>
          <TextareaWithLabel
              label={"Evaluación del progreso del paciente"}
              placeholder={"Valoración del avance del paciente"}
              value={progress}
              onchange={setProgress}
          />
          </div>
        </details>
        <details>
          <summary>Evaluación continua:</summary>
          <div>
          <TextareaWithLabel
              label={"Revisiones del plan de tratamiento"}
              placeholder={"Actualización y ajuste del plan terapéutico"}
              value={reviewsTreatment}
              onchange={setReviewsTreatment}
          />
          </div>
          <div>
          <TextareaWithLabel
              label={"Ajustes realizados"}
              placeholder={"Cambios hechos en respuesta al progreso del paciente"}
              value={adjustmentsMade}
              onchange={setAdjustmentsMade}
          />
          </div>
          <div>
          <TextareaWithLabel
              label={"Evaluación de la efectividad del tratamiento"}
              placeholder={"Valoración de la eficacia de las intervenciones"}
              value={treatmentEffectiveness}
              onchange={setTreatmentEffectiveness}
          />
          </div>
        </details>
        <details>
          <summary>Notas adicionales:</summary>
          <div>
          <TextareaWithLabel
              label={"Observaciones relevantes"}
              placeholder={"Comentarios importantes relacionados con el tratamiento"}
              value={observations}
              onchange={setObservations}
          />
          </div>
          <div>
          <TextareaWithLabel
              label={"Eventos importantes en la vida del paciente"}
              placeholder={"Sucesos significativos en la vida del paciente"}
              value={importantEvents}
              onchange={setImportantEvents}
          />
          </div>
          <div>
          <TextareaWithLabel
              label={"Feedback del paciente sobre el tratamiento"}
              placeholder={"Respuestas y opiniones del paciente sobre la terapia"}
              value={feedbackPatient}
              onchange={setFeedbackPatient}
          />
          </div>
        </details>
        <button>Añadir Paciente</button>
      </form>
    </>
  );
};
