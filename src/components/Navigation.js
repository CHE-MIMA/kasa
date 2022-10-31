import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <div >
            <ul className="navigation">
                <NavLink to="/home"
                    className={(nav) => (nav.isActive ? "nav-active" : "")}>
                    <li>Accueil</li>
                </NavLink>
                <NavLink to="/about"
                    className={(nav) => (nav.isActive ? "nav-active" : "")}>
                    <li>A Propos</li>
                </NavLink>
            </ul>
        </div>

    );
};

export default Navigation;