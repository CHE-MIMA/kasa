import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../components/Logo';
import Navigation from '../components/Navigation';
import imgErreur from '../assets/404.png'

const Error = () => {
    return (
        <div>
            <Logo/>
            <Navigation/>
            <div className='erreur'>
                <img src={imgErreur} alt="" />
            </div> 
                <p  className="erreur-p">Oups! la page que vous demandez n'existe pas</p>
                <NavLink to="/home"
                    className="erreur-link">
                    <p>Retourner sur la page d'accueil</p>
                </NavLink>
        </div>
    );
};

export default Error;