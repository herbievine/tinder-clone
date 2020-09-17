import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../styles/Buttons.css'
import { findIcon } from "../util";

const buttons = [
    {
        icon: 'faRedo',
        color: '#F0D451'
    },
    {
        icon: 'faTimes',
        color: '#F02323'
    },
    {
        icon: 'faBolt',
        color: '#DB28F0'
    },
    {
        icon: 'faHeart',
        color: '#4CF041'
    },
    {
        icon: 'faStar',
        color: '#36A3F0'
    },
]

const Buttons = () => (
    <div className="buttons">
        {buttons.map(button => (
            <div className="button" key={button.icon.toLowerCase()}>
                <FontAwesomeIcon
                    icon={findIcon(button.icon)}
                    style={{ color: button.color, fontSize: 20 }}
                />
            </div>
        ))}
    </div>
)

export default Buttons
