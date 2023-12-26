export const TextareaWithLabel = ({ label, placeholder, value, onchange }) => {
  return (
    <label>
      {label}
      <textarea
        type="text"
        placeholder={placeholder}
        value={value || ""}
        onChange={(e) => onchange(e.target.value)}
      />
    </label>
  );
};
