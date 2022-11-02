import React from 'react';
// import Data from './Data';
// import { useEffect } from 'react';
// import axios from 'axios';
// import data from '../data/logements'
import Data from "../data/logements.json";

import Card from './Card';





const CardLogement = () => {

    // const [data, setData] = useState([]);
    // const [hello] = useState("hello les amies");
    // useEffect(() => {

    // fetch("../data/logements.json")
    //     .then(function (response) {


    //         if (response.ok) {
    //             return response.json();
    //         }
    //     })
    //     .then(function (response) {

    //         console.log(response.data);

    //     })
    // .catch((e) => {
    //     console.log(e)
    // });

    //     axios

    //         .get("https://localhost:3000/")
    //         .then((res) => console.log(res.data));

    //     // .then((res) => console.log(res.data))
    // }, []);





    return (
        <div className='container'>
            {Data.map((logement) => (<Card key={logement.id} logement={logement} />)
            )}
        </div>


    );
};

export default CardLogement;