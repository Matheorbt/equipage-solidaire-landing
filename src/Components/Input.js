const Input = ({ placeholder, name, type, value, handleChange, required }) => (
    name === 'message' ?
        (<textarea
            placeholder={placeholder}
            rows="5"
            cols="33"
            type={type}
            value={value}
            onChange={(e) => handleChange(e, name)}
            required={required}
            className="contact__input"
        ></textarea>)
        :
        (<input
            placeholder={placeholder}
            type={type}
            value={value}
            onChange={(e) => handleChange(e, name)}
            required={required}
            className="contact__input"
        ></input>)
);

export default Input;