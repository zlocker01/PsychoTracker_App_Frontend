// form component
export const FormInput = ({ label, value, onChange, data, type }) => {
  return (
    <div>
      <label>{label}: </label>
      <input
        type={type}
        placeholder={`Ingresa tu ${label}`}
        value={value}
        onChange={(e) => onChange(e, data)}
      />
    </div>
  );
};

