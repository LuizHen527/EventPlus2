import React from 'react';
import './Nav.css';

import logoMobile from '../../assets/images/logo-white.svg';
import logoDesktop from '../../assets/images/logo-pink.svg';
import { Link } from 'react-router-dom';

const Nav = ({exibeNavbar, setExibeNavbar}) => {

    console.log(`EXIBE O MENU ${exibeNavbar}`);
    return (
        <nav className={`navbar ${exibeNavbar ? "exibeNavbar" : ""}`}>
            <span onClick={() => {setExibeNavbar(false)}} className='navbar__close'>x</span>

            <Link to="/" className='eventlogo'>
                <img className='eventlogo__logo-image' src={window.innerWidth >= 992 ? logoDesktop : logoMobile} alt="Event plus logo"/>
            </Link>

            <a href="" className='eventlogo'>
                <img className='eventlogo__logo-image' src={logoMobile} alt="" />
            </a>
            
            <div className='navbar__items-box'>
                <Link className='navbar__item' to="/">Home</Link>
                <Link className='navbar__item' to="/eventos">Eventos</Link>
                <Link className='navbar__item' to="/tiposeventos">Tipos Eventos</Link>
                <Link className='navbar__item' to="/login">Login</Link>
            </div>
        </nav>
    );
};

export default Nav;