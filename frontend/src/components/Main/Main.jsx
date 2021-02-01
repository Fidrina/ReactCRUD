import React from 'react';

import './Main.css';

import Header from '../../components/Header/Header.jsx';
import Logo from '../../components/Logo/Logo.jsx';
import Nav from '../../components/Nav/Nav.jsx';
import Footer from '../../components/Footer/Footer.jsx';

function Main(props) {
    return (
        <div className="app">
            <Header icon={props.icon} title={props.title} info={props.info} />
            <Logo />
            <Nav />
            <div>{props.children}</div>
            <Footer />
        </div>
    );
}

export default Main;