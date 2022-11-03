import React from 'react';
import { useState } from 'react';
import iconHaut from '../assets/iconhaut.png';
import iconBas from '../assets/iconbas.png';



const Dropdown = ({ titre, contenu }) => {

    const [isOpen, setIsOpen] = useState(true)
    return isOpen ? (
        <div className='div-open'>
            <div className='drop-open'>
                <h2>{titre}</h2>
                <button
                    className='div-open-button'
                    onClick={() => setIsOpen(false)} >
                    <img src={iconHaut} alt=" Fermer" />
                </button>
            </div>

            <div className='drop-down' >
                <span>{contenu}</span>
            </div>
        </div>

    ) : (
        <div className='drop-close'>
            <h2>{titre}</h2>
            <button
                className='div-close-button'
                onClick={() => setIsOpen(true)}
            >
                <img src={iconBas} alt="Ouvrir" />

            </button>
        </div>
    )

};

export default Dropdown;



