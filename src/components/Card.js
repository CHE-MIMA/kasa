import React from 'react';
import logements from '../logements';

const Card = ({ logement }) => {
    console.log(logements);
    return (

        <div className='card'>
            <img
                src={logement.cover}
                alt={"logement" + logement.title} />
            <div className='card-info'>
                <h2>{logement.title}</h2>

            </div>
        </div>

    );
};

export default Card;