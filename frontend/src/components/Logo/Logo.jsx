import React from 'react';

import { Link } from 'react-router-dom';

import './Logo.css';

import LogoImage from '../../assets/Logo.png';

function Logo() {
    return (
        <aside className="logo">
            <Link to="/" className="logo">
                <img src={LogoImage} alt="Logo" />
            </Link>
        </aside>
    );
}

export default Logo;