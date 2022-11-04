import React from 'react';
import Logo from '../components/Logo';
import Navigation from '../components/Navigation';
import imgAbout from '../assets/imgabout.png'
import Footer from '../components/Footer';
import Dropdown from '../components/Dropdown';
// import { useState } from 'react';

const About = () => {
   
        // const [drop, updateDrop] = useState([])
        
    return (
       <div>
        <div className="content">
            <Logo/>
            <Navigation/>
            
         <div className='banner'>
             <img src={imgAbout} alt="chez vous, partout et ailleurs" />
         </div>
         <div className='flex-drop' >
         <Dropdown   
          titre="Fiabilité"
          contenu="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, 
          et toutes les informations sont régulièrement vérifiées par nos équipes."
         />
         <Dropdown
                    titre="Respect"
                    contenu="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire
                        ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
                />

         <Dropdown
                    titre="Service"
                    contenu="Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez
                        pas à nous contacter si vous avez la moindre question."
         />
        <Dropdown
                    titre="Sécurité"
                    contenu="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque
                        logement correspond aux critères de sécurité établis par nos services. En laissant une note
                        aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards
                        sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos
                        hôtes."
          />
         </div>  
         </div>
            <Footer/> 
            </div>
       
       
    );
};

export default About;