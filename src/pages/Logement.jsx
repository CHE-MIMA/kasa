import React from 'react';
import Footer from '../components/Footer';
import Logo from '../components/Logo';
import Navigation from '../components/Navigation';
import { useParams } from 'react-router-dom';
import Error from './Error';
import Data from '../data/logements.json';

const Logement = () => {
    const { id } = useParams();

    const logementDetails = Data.find((object) => object.id === id);
    if (!logementDetails) {
        return <Error />;
    }

    const { title, location, host } = logementDetails;

    
    return (
        <div>
           <Logo/>
            <Navigation/> 
           <main className='div-logement'>
           <div className="logement">
                <div>
                    <h2 className="loge-titre">{title}</h2>
                    <h3 className="loge-location">{location}</h3>
                    {/* <Tag tags={tags} /> */}
                </div>
            </div>
            
            <div className="proprio-info">
                        <h4 className='proprio-name'>{host.name}</h4>
                        <img className="proprio-picture" src={host.picture} alt={host.name} />
             </div>

           </main>
            <Footer/>
        </div>
    );
};

export default Logement;