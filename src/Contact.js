import React, { useState } from 'react'
import Input from './Components/Input'
import divisionInfo from "./divisionContact"
import Loader from "./Components/Loader"

const Contact = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [formData, setformData] = useState({ divisionTo: "", message: "", name: "", lastName: "", email: "" });
    const handleChange = (e, name) => {
        setformData((prevState) => ({ ...prevState, [name]: e.target.value }));
    };

    const handleSubmit = (e) => {
        const { divisionTo, message, name, lastName, email } = formData;

        e.preventDefault();
        if (!divisionTo || !message || !name || !lastName || !email) return;

        setIsLoading(true);

        setTimeout(() => {
            setIsLoading(false);
        }, 3000);

        // HANDLE FORM SUBMIT
    };

    return (
        <>
            <div>Contact</div>
            <form className='form-contact' onSubmit={handleSubmit}>
                <select name="divisionTo" onChange={(e) => handleChange(e, "divisionTo")}>
                    {divisionInfo.map((division, index) => (
                        <option key={index} value={division.email}>{division.name}</option>
                    ))}
                </select>
                <Input
                    placeholder="Message"
                    name="message"
                    type="text"
                    handleChange={handleChange}
                    required={true}
                />
                <Input
                    placeholder="Nom"
                    name="lastName"
                    type="text"
                    handleChange={handleChange}
                    required={true}
                />
                <Input
                    placeholder="Prénom"
                    name="name"
                    type="text"
                    handleChange={handleChange}
                    required={true}
                />
                <Input
                    placeholder="Votre E-mail"
                    name="email"
                    type="email"
                    handleChange={handleChange}
                    required={true}
                />
                {isLoading ? (
                    <Loader />
                ) : (
                    <button
                        type="submit"
                    >
                        Send now
                    </button>
                )}
            </form>
        </>
    )
}

export default Contact