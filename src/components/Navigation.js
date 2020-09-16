import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../styles/Navigation.css'
import { faUser, faComments } from '@fortawesome/free-regular-svg-icons'

const Navigation = () => (
    <div className="navigation">
        <FontAwesomeIcon
            icon={faUser}
            style={{ color: '#555555', fontSize: 20 }}
        />
        <img
            className="tinder-logo"
            src="https://1000logos.net/wp-content/uploads/2018/07/tinder-logo.png"
            alt="Tinder Logo"
        />
        <FontAwesomeIcon
            icon={faComments}
            style={{ color: '#555555', fontSize: 20 }}
        />
    </div>
)

export default Navigation
