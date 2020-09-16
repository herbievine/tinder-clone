import React from 'react'
import PersonOutlineSharpIcon from '@material-ui/icons/PersonOutlineSharp'
import ChatBubbleOutlineSharpIcon from '@material-ui/icons/ChatBubbleOutlineSharp'
import '../styles/Navigation.css'

function Navigation() {
    return (
        <div className="navigation">
            <PersonOutlineSharpIcon />
            <h2>Herbie</h2>
            <ChatBubbleOutlineSharpIcon />
        </div>
    )
}

export default Navigation
