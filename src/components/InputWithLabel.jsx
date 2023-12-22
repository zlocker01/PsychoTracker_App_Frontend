export const InputWithLabel = ({ label, placeholder, value, onchange }) => {
  return (
    <label>
      {label}
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onchange(e.target.value)}
      />
    </label>
  );
};
