import React from 'react';

import './Nav.css';

import { Link } from 'react-router-dom';

import Navigator from '../../methods/Navigator';

function Nav() {
    return (
        <aside className="menu-area">
            <nav className="menu">
                {
                    (new Navigator()).index().map(function (el, key) {
                        return (
                            <Link to={el.to} key={key}>
                                <i className={el.icon}></i> {el.title}
                            </Link>
                        )
                    })
                }
            </nav>
        </aside>
    );
}

export default Nav;