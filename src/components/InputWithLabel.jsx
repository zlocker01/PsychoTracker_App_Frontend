export const InputWithLabel = ({ label, placeholder, value, onchange }) => {
  return (
    <label>
      {label}
      <input
        type="text"
        placeholder={placeholder}
        // empty string to have no problme wiht null and uncontrolled value
        value={value || ""}
        onChange={(e) => onchange(e.target.value)}
      />
    </label>
  );
};
