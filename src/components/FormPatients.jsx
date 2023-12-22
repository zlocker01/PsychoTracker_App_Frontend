export const FormPatients = () => {
  return (
    <>
      <h2>Añade un Nuevo Paciente</h2>
      <form>
        <details>
          <summary>Información personal básica:</summary>
          <div>
            <label>
              Nombre
              <input
                type="text"
                id="patient__name"
                placeholder="Nombre del paciente"
              />
            </label>
          </div>
          <div>
            <label>
              Edad
              <input type="text" id="patient__age" placeholder="Edad actual" />
            </label>
          </div>
          <div>
            <label>
              Género
              <input
                type="text"
                id="patient__gender"
                placeholder="Identificación de género del paciente"
              />
            </label>
          </div>
          <div>
            <label>
              Escolaridad
              <input
                type="text"
                id="patient__scholarship"
                placeholder="Grado de estudios del paciente"
              />
            </label>
          </div>
          <div>
            <label>
              Telefono
              <input
                type="text"
                id="patient__phone"
                placeholder="Número de contacto del paciente"
              />
            </label>
          </div>
          <div>
            <label>
              Correo
              <input
                type="text"
                id="patient__email"
                placeholder="Dirección de correo electrónico del paciente"
              />
            </label>
          </div>
          <div>
            <label>
              Dirección
              <input
                type="text"
                id="patient__adress"
                placeholder="Direccón fisica del paciente"
              />
            </label>
          </div>
        </details>
        <details>
          <summary>Historial clinico:</summary>
          <div>
            <label>
              Motivo de consulta
              <textarea
                type="text"
                id="patient__reason"
                placeholder="Motivo principal de consulta"
              />
            </label>
          </div>
          <div>
            <label>
              Antecedentes médicos
              <textarea
                type="text"
                id="patient__medicalHistory"
                placeholder="Historia de la salud física del paciente"
              />
            </label>
          </div>
          <div>
            <label>
              Antecedentes familiares
              <textarea
                type="text"
                id="patient__family"
                placeholder="Salud de familiares cercanos"
              />
            </label>
          </div>
          <div>
            <label>
              Historial de tratamientos anteriores
              <textarea
                type="text"
                id="patient__previousTreatments"
                placeholder="Registro de tratamientos previos"
              />
            </label>
          </div>
        </details>
        <details>
          <summary>Evaluación inicial:</summary>
          <div>
            <label>
              Evaluación de la salud mental
              <textarea
                type="text"
                id="patient__mentalEvaluation"
                placeholder="Evaluación general del estado mental del paciente"
              />
            </label>
          </div>
          <div>
            <label>
              Evaluación de riesgo
              <textarea
                type="text"
                id="patient__riskEvaluation"
                placeholder="Evaluación de posibles amenazas a la salud mental del paciente"
              />
            </label>
          </div>
          <div>
            <label>
              Objetivos terapéuticos iniciales
              <textarea
                type="text"
                id="patient__mentalGoals"
                placeholder="Metas iniciales para la terapia"
              />
            </label>
          </div>
        </details>
        <details>
          <summary>Diagnostico:</summary>
          <div>
            <label>
              Diagnóstico provisional
              <textarea
                type="text"
                id="patient__provitionalD"
                placeholder="Evaluación inicial del estado del paciente"
              />
            </label>
          </div>
          <div>
            <label>
              Observaciones sobre la evolución del diagnóstico
              <textarea
                type="text"
                id="patient__observationsD"
                placeholder="Notas sobre cambios en el diagnóstico"
              />
            </label>
          </div>
        </details>
        <details>
          <summary>Tratamiento y planificación:</summary>
          <div>
            <label>
              Plan de tratamiento
              <textarea
                type="text"
                id="patient__plan"
                placeholder="Estrategias y metas terapéuticas"
              />
            </label>
          </div>
          <div>
            <label>
              Intervenciones terapéuticas
              <textarea
                type="text"
                id="patient__observationsT"
                placeholder="Acciones específicas para abordar los problemas"
              />
            </label>
          </div>
          <div>
            <label>
              Actividades recomendadas entre sesiones
              <textarea
                type="text"
                id="patient__activities"
                placeholder="Tareas sugeridas para realizar fuera de las sesiones"
              />
            </label>
          </div>
        </details>
        <details>
          <summary>Medicación:</summary>
          <div>
            <label>
              Medicamentos recetados
              <textarea
                type="text"
                id="patient__medicinesName"
                placeholder="Lista de medicamentos y sus nombres"
              />
            </label>
          </div>
          <div>
            <label>
              Dosis
              <textarea
                type="text"
                id="patient__medicinesDose"
                placeholder=" Indicaciones sobre la dosis"
              />
            </label>
          </div>
          <div>
            <label>
              Frecuencia
              <textarea
                type="text"
                id="patient__medicinesDose"
                placeholder="Indicaciones sobre cómo tomar la medicación"
              />
            </label>
          </div>
        </details>
        <details>
          <summary>Sesiones y notas de progreso:</summary>
          <div>
            <label>
              Fechas y duración de las sesiones
              <input
                type="text"
                id="patient__duration"
                placeholder="Registro temporal de las sesiones terapéuticas"
              />
            </label>
          </div>
          <div>
            <label>
              Temas discutidos
              <textarea
                type="text"
                id="patient__topics"
                placeholder="Asuntos abordados durante las sesiones"
              />
            </label>
          </div>
          <div>
            <label>
              Técnicas terapéuticas utilizadas
              <textarea
                type="text"
                id="patient__methods"
                placeholder="Métodos específicos empleados en la terapia"
              />
            </label>
          </div>
          <div>
            <label>
              Evaluación del progreso del paciente
              <textarea
                type="text"
                id="patient__progress"
                placeholder="Valoración del avance del paciente"
              />
            </label>
          </div>
        </details>
        <details>
          <summary>Evaluación continua:</summary>
          <div>
            <label>
              Revisiones del plan de tratamiento
              <textarea
                type="text"
                id="patient__reviews"
                placeholder="Actualización y ajuste del plan terapéutico"
              />
            </label>
          </div>
          <div>
            <label>
              Ajustes realizados
              <textarea
                type="text"
                id="patient__adjusments"
                placeholder="Cambios hechos en respuesta al progreso del paciente"
              />
            </label>
          </div>
          <div>
            <label>
              Evaluación de la efectividad del tratamiento
              <textarea
                type="text"
                id="patient__effectiveness"
                placeholder="Valoración de la eficacia de las intervenciones"
              />
            </label>
          </div>
        </details>
        <details>
          <summary>Notas adicionales:</summary>
          <div>
            <label>
              Observaciones relevantes
              <textarea
                type="text"
                id="patient__observations"
                placeholder="Comentarios importantes relacionados con el tratamiento"
              />
            </label>
          </div>
          <div>
            <label>
              Eventos importantes en la vida del paciente
              <textarea
                type="text"
                id="patient__events"
                placeholder="Sucesos significativos en la vida del paciente"
              />
            </label>
          </div>
          <div>
            <label>
              Feedback del paciente sobre el tratamiento
              <textarea
                type="text"
                id="patient__opinion"
                placeholder="Respuestas y opiniones del paciente sobre la terapia"
              />
            </label>
          </div>
        </details>
        <button>Añadir Paciente</button>
      </form>
    </>
  );
};
