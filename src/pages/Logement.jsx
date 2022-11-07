import React from 'react';
import Footer from '../components/Footer';
import Logo from '../components/Logo';
import Navigation from '../components/Navigation';
import { useParams } from 'react-router-dom';
import Error from './Error';
import Data from '../data/logements.json';
import Dropdown from '../components/Dropdown';
import Tag from '../components/Tag';
import Lightbox from '../components/Lightbox';
import starOrange from '../assets/starOrange.png'
import starGrey from '../assets/starGrey.png'

const Logement = () => {
    const { id } = useParams();

    const logementDetails = Data.find((object) => object.id === id);
    if (!logementDetails) {
        return <Error />;
    }

    const { title, location, host, description, equipments, tags, rating} = logementDetails;
const range=[1, 2, 3, 4, 5]
    
    return (
        <div>
        <div  className="content">
           <Logo/>
            <Navigation/> 
            <Lightbox/>
           <main className='div-logement'>
           <div className="logement">
                <div>
                    <h2>{title}</h2>
                    <h3>{location}</h3>
                   
                </div>
                <Tag tags={tags} 
                    />
            </div>
            <div  className='proprio-info-stars'>
                <div className="proprio-info">
                        <h4>{host.name}</h4>
                        <img src={host.picture} alt={host.name} />
                </div>  
                <div className="notation">
                   {range.map((rangeElement)=>
                   rating>= rangeElement?
                   (
                     <img key={rangeElement.toString()}src={starOrange}alt="étoile-orange" />
                   ):
                   (
                    <img key={rangeElement.toString()}src={starGrey}alt="étoile-gris" />
                   )
                   )}
				   
                </div>   
            </div>
           
         </main>
              
            <div className='flex-logement'>

                
                  <div className='desc'>
             <Dropdown 
                    titre=" Description "
                    contenu={description}
                 
                />
                 </div>
                 <div className='equip'>
             <Dropdown 
                    titre=" Équipements"
                    contenu= {equipments} 
                 
                />
            </div>
           </div> 
        

        </div>
            <Footer/>
        </div>
    );
};

export default Logement;