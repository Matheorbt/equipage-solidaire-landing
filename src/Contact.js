import React, { useState } from 'react'
import Input from './Components/Input'
import divisionInfo from "./divisionContact"
import Loader from "./Components/Loader"
import HeaderContact from './Components/ContactHeader'
const axios = require("axios");

const Contact = () => {
    const sendURL = "https://api.emailjs.com/api/v1.0/email/send";
    const [isLoading, setIsLoading] = useState(false);
    const [formData, setformData] = useState({ divisionTo: "", message: "", name: "", lastName: "", email: "" });

    const handleChange = (e, name) => {
        setformData((prevState) => ({ ...prevState, [name]: e.target.value }));
        console.log(e.target.value);
    };

    const handleSubmit = (e) => {
        const { message, name, lastName, email } = formData;

        e.preventDefault();
        if (!message || !name || !lastName || !email) return;

        setIsLoading(true);
        console.log(formData.divisionTo);
        sendEmail(e);

        setIsLoading(false);
    };

    const sendEmail = async (e) => {
        await axios({
            method: "POST",
            url: sendURL,
            data: {
                service_id: "service_" + process.env.REACT_APP_SERVICE_KEY,
                template_id: "template_" + process.env.REACT_APP_TEMPLATE_CONTACT_KEY,
                user_id: "user_" + process.env.REACT_APP_USER_KEY,
                template_params: {
                    'divisionTo': formData.divisionTo,
                    'message': formData.message,
                    'name': formData.name,
                    'lastName': formData.lastName,
                    'email': formData.email,
                }
            },
            contentType: 'application/json'
        }).then(
            function (response) {
                window.alert("Merci ta demande a bien été prise en compte ! 👍");
            },
            function (error) {
                window.alert(
                    "Un problème est survenu, merci de réessayer ultérieurement, si le problème persiste merci de nous contacter à : equipagesolidaire@gmail.com"
                );
                console.log("mailjs error : " + error.toString());
            }
        );
    }

    return (
        <main className='contact-main'>
            <HeaderContact />
            <h1 className='contact-title'>Nous contacter</h1>
            <form className='form-contact' onSubmit={handleSubmit}>
                <div>
                    <label>Pôle concerné(optionel)</label>
                    <select value={formData.divisionTo} className='contact__input' name="divisionTo" onChange={(e) => handleChange(e, "divisionTo")}>
                        {divisionInfo.map((division, index) => (
                            <option key={index} value={division.email}>{division.name}</option>
                        ))}
                    </select></div>
                <div>
                    <label>Message</label>
                    <Input
                        placeholder="Message"
                        name="message"
                        type="text"
                        handleChange={handleChange}
                        required={false}
                    /></div>
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
                    <label>Adresse e-mail</label>
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

export default Contact