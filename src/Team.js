import React from 'react'
import HeaderContact from './Components/ContactHeader'
import TeamMembers from './images/team_profile.jpg'

const Contact = () => {
    return (
        <main className='contact-main' style={{ display: "flex", flexDirection: 'column', justifyContent: 'center' }}>
            <HeaderContact />
            <img className='team_image' alt='team members' src={TeamMembers}></img>
        </main>
    )
}

export default Contact