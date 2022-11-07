import React from 'react';
import { useParams } from 'react-router-dom';
import data from '../data/logements.json';
import { useState } from 'react';
import nextIcon from '../assets/next.png';
import previousIcon from '../assets/previous.png';



const Lightbox = () => {

    const { id } = useParams();
    const logement = data.find((element) => element.id === id);
    const { pictures } = logement;

    const [currentElement, setCurrent] = useState(0);



    //  fonction qui affiche l'element suivant. 
    function next() {
        setCurrent(currentElement === pictures.length - 1 ? 0 : currentElement + 1);
    };
    //  fonction qui affiche l'element précedent. 
    function previous() {
        setCurrent(currentElement === 0 ? pictures.length - 1 : currentElement - 1);
    }

    return (
        <div className="lightbox" >

            {/* affiche le bouton precedent  */}

            <img className='previous'
                onClick={previous} src={previousIcon} alt="precedante" />

            {/* affiche l'image */}
            <div>
                {pictures.map((img, index) => {
                    return (
                        <div className='flex-img-number' key={index}>
                            {index === currentElement && <img className="lightbox-image" src={img} alt="Photos du logement" />}
                            {index === currentElement && (
                                <span className="img-number">
                                    {currentElement + 1}/{pictures.length}
                                </span>)}

                        </div>
                    );
                })
                }
            </div>
            {/* affiche le bouton suivant  */}
            <img className='next'
                onClick={next} src={nextIcon} alt="suivante" />
        </div>
    );
};

export default Lightbox;













