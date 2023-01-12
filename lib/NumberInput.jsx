const NumberInput = ({ name, title, value, onChange, ...props }) => {
  return (
    <div>
      <label htmlFor={name} className="text-lg">
        {title}:
      </label>
      <input
        className="w-16 px-4 mx-2"
        type="number"
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        {...props}
      />
    </div>
  );
};

export default NumberInput;
