import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../components/Logo';
import Navigation from '../components/Navigation';

const Error = () => {
    return (
        <div>
            <Logo/>
            <Navigation/>
            <div className='erreur'>
                <img src="" alt="" />
            </div> 
                <p  className="erreur-p">Oups! la page que vous demandez n'existe pas</p>
                <NavLink to="/"
                    className="erreur-link">
                    <p>Retourner sur la page d'accueil</p>
                </NavLink>
        </div>
    );
};

export default Error;