import React from 'react';

import { useState, useEffect } from 'react';
import Card from './Card';
import axios from 'axios';
// const [data, setData]= useState([])
// useEffect(()=>{ 
//     Container} , []);

const CardLogement = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        Container()
    }, []);
    const Container = () => {
        /*
        fetch("http://localhost:3000/src/logements.json")
            .then(function (response) {
                setData(response)

                // if (response.ok) {
                //     return response.json();
                // }
            })
            // .then(function (value) {
            //     let logements = value;
            //     console.log(logements);

            // })
            .catch((e) => {
                console.log(e)
            });
    };
    console.log({ data });
    return (
*/


        // const CardLogement = () => {

        axios.get('http://localhost:3000/src/logements.json')

            .then((res) => {

                console.log(res);

                setData(res);

            })

            .catch((err) => {

                console.log(err);

            });


    };

    return (
        <div className='container'>
            {data.map((logement) => (<Card key={logement.id} logement={logement} />)
            )}
        </div>


    );
};

export default CardLogement;