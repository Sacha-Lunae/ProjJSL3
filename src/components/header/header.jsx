import React from "react";
import "./header.css";
import CTA from './CTA'
import ME from '../../assets/gd.png'
import HeaderSocials from "./headerSocials";

const Header = () => {
    return(
        <header>
            <section id='header'>
            <div className="container header__container">
                <h5>Hello I'm</h5>
                <h1>Sacha Guenoun</h1>
                <h5 classname="text-light">Student @ Efrei Paris</h5>
                <CTA />

                <div className="me">
                    <img src={ME} alt="me"/>
                </div>

                <a href="#contact" className='scroll_down'>Scroll down</a>

                <HeaderSocials />
            </div>
            </section>
        </header>
    )
}
export {Header};