import React from 'react';

import './Nav.css';

import { Link } from 'react-router-dom';

const Navigation = [
    { icon: `fa fa-home`, title: `Home`, to: `/` },
    { icon: `fa fa-users`, title: `User`, to: `/users` }
];

function Nav() {
    return (
        <aside className="menu-area">
            <nav className="menu">
                {
                    Navigation.map(function (el, key) {
                        return (
                            <Link to={el.to}>
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