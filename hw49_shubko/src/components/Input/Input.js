import "./Input.css";
const Input = ({ className, name, type, value, handleChange }) => {
  return (
    <input
      className={className}
      name={name}
      value={value}
      type={type}
      onChange={handleChange}
    />
  );
};
export default Input;
