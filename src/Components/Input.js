const Input = ({ placeholder, name, type, value, handleChange, required }) => (
    <input
        placeholder={placeholder}
        type={type}
        value={value}
        onChange={(e) => handleChange(e, name)}
        required={required}
        className="my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-small white-glassmorphism"
    ></input>
);

export default Input;