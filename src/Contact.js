import React, { useState } from 'react'
import Input from './Components/Input'
import divisionInfo from "./divisionContact"
import Loader from "./Components/Loader"
import HeaderContact from './Components/ContactHeader'

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
        <main className='contact-main'>
            <HeaderContact />
            <h1 className='contact-title'>Nous contacter</h1>
            <form className='form-contact' onSubmit={handleSubmit}>
                <label>Pôle concerné(optionel)</label>
                <select className='contact__input' name="divisionTo" onChange={(e) => handleChange(e, "divisionTo")}>
                    {divisionInfo.map((division, index) => (
                        <option key={index} value={division.email}>{division.name}</option>
                    ))}
                </select>
                <label>Message</label>
                <Input
                    placeholder="Message"
                    name="message"
                    type="text"
                    handleChange={handleChange}
                    required={false}
                />
                <label>Nom</label>
                <Input
                    placeholder="Nom"
                    name="lastName"
                    type="text"
                    handleChange={handleChange}
                    required={true}
                />
                <label>Prénom</label>
                <Input
                    placeholder="Prénom"
                    name="name"
                    type="text"
                    handleChange={handleChange}
                    required={true}
                />
                <label>Adresse e-mail</label>
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
                        className='contact-btn'
                        type="submit"
                    >
                        Envoyer
                    </button>
                )}
            </form>
        </main>
    )
}

export default Contact