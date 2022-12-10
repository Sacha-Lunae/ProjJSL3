import React from "react";
import {ImHome} from 'react-icons/im'
import {ImQuill} from 'react-icons/im'
import {GiCardPick} from 'react-icons/gi'
import "./nav.css";
import {useState} from 'react'
import { useHistory } from "react-router-dom";

const Nav = (props) => {
    const [activeNav, setActiveNav] = useState('#' + props.tab)
    const history = useHistory()

    const handleOracle =() =>{
        history.push("/oracle")
        history.go("/oracle")
    }

    const handleHome = () =>{
        history.push("/")
        history.go("/")
    }



    return(
        <nav>
            <a href="#" onClick={()=> handleHome()} className={activeNav === '#cardslist' ? 'active' : ''}><ImHome /> </a>
            <a href="#about" onClick={()=> setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><GiCardPick /> </a>
            <a href="#oracle" onClick={()=> handleOracle()} className={activeNav === '#newcard' ? 'active' : ''}><ImQuill /> </a>

        </nav>
    )
}

export {Nav};