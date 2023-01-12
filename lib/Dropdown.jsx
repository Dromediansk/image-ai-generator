const Dropdown = ({ name, title = name, options, value, onChange }) => {
  return (
    <div>
      <label htmlFor={name} className="text-lg">
        {title}:
      </label>
      <select
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        className="border rounded px-4 mx-2"
      >
        {options.map((option) => (
          <option key={option}>{option}</option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
