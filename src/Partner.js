import React, { useState } from 'react'
import Input from './Components/Input'
import Loader from "./Components/Loader"
import HeaderContact from './Components/ContactHeader'

const Partner = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [formData, setformData] = useState({ message: "", name: "", lastName: "", email: "" });
    const handleChange = (e, name) => {
        setformData((prevState) => ({ ...prevState, [name]: e.target.value }));
    };

    const handleSubmit = (e) => {
        const { message, name, lastName, email } = formData;

        e.preventDefault();
        if (!message || !name || !lastName || !email) return;

        setIsLoading(true);

        setTimeout(() => {
            setIsLoading(false);
        }, 3000);

        // HANDLE FORM SUBMIT
    };

    return (
        <main className='contact-main'>
            <HeaderContact />
            <h1 className='contact-title'>Devenir partenaire</h1>
            <form className='form-contact' onSubmit={handleSubmit}>
                <div>
                    <label>Message</label>
                    <Input
                        placeholder="Message"
                        name="message"
                        type="text"
                        handleChange={handleChange}
                        required={true}
                    />
                </div>
                <div>
                    <label>Nom</label>
                    <Input
                        placeholder="Nom"
                        name="lastName"
                        type="text"
                        handleChange={handleChange}
                        required={true}
                    /></div>
                <div>
                    <label>Prénom</label>
                    <Input
                        placeholder="Prénom"
                        name="name"
                        type="text"
                        handleChange={handleChange}
                        required={true}
                    /></div>
                <div>
                    <label>E-mail</label>
                    <Input
                        placeholder="Votre E-mail"
                        name="email"
                        type="email"
                        handleChange={handleChange}
                        required={true}
                    /></div>
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

export default Partner