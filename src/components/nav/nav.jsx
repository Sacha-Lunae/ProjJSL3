import React from "react";
import {ImHome} from 'react-icons/im'
import {ImUser} from 'react-icons/im'
import {ImTerminal} from 'react-icons/im'
import {TbHeartHandshake} from 'react-icons/tb'
import {ImQuill} from 'react-icons/im'
import {GiCardPick} from 'react-icons/gi'
import "./nav.css";
import {useState} from 'react'

const Nav = () => {
    const [activeNav, setActiveNav] = useState('#')
    return(
        <nav>
            <a href="#" onClick={()=> setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><ImHome /> </a>
            <a href="#about" onClick={()=> setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><GiCardPick /> </a>
            <a href="#experience" onClick={()=> setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><ImTerminal /> </a>
            <a href="#engagement" onClick={()=> setActiveNav('#engagement')} className={activeNav === '#engagement' ? 'active' : ''}><TbHeartHandshake /> </a>
            <a href="#contact" onClick={()=> setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><ImQuill /> </a>

        </nav>
    )
}

export {Nav};