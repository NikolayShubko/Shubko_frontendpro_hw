const Input = ({ className, name, value, handleChange, placeholder }) => {
  return (
    <input
      className={className}
      name={name}
      value={value}
      onChange={handleChange}
      placeholder={placeholder}
    />
  );
};
export default Input;
