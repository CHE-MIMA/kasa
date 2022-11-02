import React from 'react';
import Navigation from '../components/Navigation';
import Logo from '../components/Logo';
import CardLogements from '../components/CardLogement';
import Footer from '../components/Footer';
import imgHome from '../assets/imghome.png';

const Home = () => {

  return (
    <div>
      <Logo/>
      <Navigation/>
      
         <div className='banner'>
             <img src={imgHome} alt="chez vous, partout et ailleurs" />
        
         <h1>Chez vous, partout et ailleurs</h1>
         </div>
     
     <CardLogements/>
     <Footer/>
    </div>
  );
};

export default Home;

