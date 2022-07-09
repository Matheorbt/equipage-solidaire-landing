import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
    return (
        <>
            <div className='not_found__main'>
            </div>
            <div className='not_found__hero'>
                <h1>Page introuvable</h1>
                <p>La page que vous avez recherché n'existe pas</p>
                <Link to="/">Retour à l'accueil</Link>
            </div>
        </>
    )
}

export default NotFound