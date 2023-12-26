export const TextareaWithLabel = ({ label, placeholder, value, onchange }) => {
  return (
    <label>
      {label}
      <textarea
        type="text"
        placeholder={placeholder}
        // empty string to have no problme wiht null and uncontrolled value
        value={value || ""}
        onChange={(e) => onchange(e.target.value)}
      />
    </label>
  );
};
