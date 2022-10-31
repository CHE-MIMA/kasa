import React from 'react';
import { NavLink } from 'react-router-dom';
// import logements from '../logements';

const Card = ({ logement }) => {
    console.log(logement);
    return (
        <NavLink to={"/logement/" + logement.id} className='card'>

            <div className='card'>
                <img
                    src={logement.cover}
                    alt={"logement" + logement.title} />
                <div className='card-info'>
                    <h2>{logement.title}</h2>

                </div>
            </div>
        </NavLink>

    );
};

export default Card;