import React, { useEffect, useState } from 'react'
import "./Nav.css"
function Nav() {

    const [show, handleShow] = useState(false);


    const transitionNavBar = () => {
        if (window.screenY > 100) {
            handleShow(true);
        }else {
            handleShow(false);
        }
    }

    useEffect(() => {

        window.addEventListener("scroll", transitionNavBar);
        return () => window.removeEventListener("scroll",  transitionNavBar)
    }, [])
    return (
    <div className ={`nav ${show && 'nav__black'}`}>
        <div className ="nav__contents">
            <img
            className = "nav__logo"
             src ="https://www.pngjoy.com/pngm/537/8356716_netflix-logo-graphic-design-transparent-png.png"/>
            <img 
            className="nav__avatar"
            src ="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png"
            alt=""/>
        </div>
    </div>
            
    )
}

export default Nav
