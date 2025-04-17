import React, { useState } from 'react';

import './MenuBar.css'
import { useEffect } from 'react';
import { useLocation } from 'react-router'

const MenuBar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false)
    const location = useLocation();
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    useEffect(() => { 
        if(location?.pathname.toLocaleLowerCase() !== '/') {
            setIsScrolled(true)
        }
        window.addEventListener('scroll', () => {
            const scrollPosition = window.scrollY;
            setIsScrolled(scrollPosition > 0)
            if(location?.pathname.toLocaleLowerCase() !== '/') {
                setIsScrolled(true)
            }
        });
     },[location.pathname])

     useEffect(() => {
        
     }, [location.pathname]) 

    return (
        <nav className={`header ${isScrolled ?  'scrolled' : ""}`}>
            <div className="nav-wrapper">
                <a className="logo" href='/'>
                    <svg width="30" height="35" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="15" cy="20" r="10" stroke="#fff"/>
                        <circle cx="15" cy="20" r="6" stroke="#fff" strokeWidth="3"/>
                    </svg>                 
                    <span>GoldenCity</span>
                </a>

                <div className="hamburger" onClick={toggleMenu}>
                    <span className={`bar ${menuOpen ? 'active' : ''}`}></span>
                    <span className={`bar ${menuOpen ? 'active' : ''}`}></span>
                    <span className={`bar ${menuOpen ? 'active' : ''}`}></span>
                </div>

                <ul className={`menu ${menuOpen ? 'active' : ''}`}>
                    <li><a href="/About">About</a></li>
                    <li><a href="/MarketPlace">MarketPlace</a></li>
                    <li><a href="/FAQ">FAQ</a></li>
                    <li><button className='button'>Connect</button></li>                
                </ul>
            </div>
        </nav>
    )
}

export default MenuBar;
