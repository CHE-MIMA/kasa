import React from 'react';
import logements from '../logements';
import Card from './Card';

const Container = () => {

    return (

        <div className='container'>
            {logements.map((logement) => <Card key={logement.id} logement={logement} />
            )}
        </div>


    );
};

export default Container;