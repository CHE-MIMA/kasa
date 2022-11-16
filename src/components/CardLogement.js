import React from 'react';
import Data from "../data/logements.json";
import Card from './Card';
const CardLogement = () => {

    return (
        <div className='container'>
            {Data.map((logement) => (<Card key={logement.id} logement={logement} />)
            )}
        </div>
    );
};
export default CardLogement;