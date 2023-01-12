const Dropdown = ({ name, options, value, onChange }) => {
  return (
    <div>
      <label htmlFor={name} className="p-2 text-lg">
        {name}:
      </label>
      <select
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        className="border rounded px-4"
      >
        {options.map((option) => (
          <option key={option}>{option}</option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
