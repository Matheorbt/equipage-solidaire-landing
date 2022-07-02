import React from 'react'
import {
    LogoColored,
} from "../images/index";
import { Link } from "react-router-dom";

const HeaderContact = () => {
    return (
        <header className='contact_header__container'>
            <div className='contact_header__subcontainer'>
                <div className='contact_header__subcontainer_left'>
                    <img src={LogoColored} alt="equipage solidaire" />
                    <h1>L'équipage Solidaire</h1>
                </div>
                <Link to='/'>Retour à l'accueil</Link>
            </div>
            <hr />
        </header>
    )
}

export default HeaderContact