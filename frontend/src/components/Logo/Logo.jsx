import React from 'react';

import './Logo.css';

import LogoImage from '../../assets/Logo.png';

function Logo() {
    return (
        <aside className="logo">
            <a href="/" className="logo">
                <img src={LogoImage} alt="Logo" />
            </a>
        </aside>
    );
}

export default Logo;