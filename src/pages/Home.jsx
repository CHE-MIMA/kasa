import React from 'react';
import Navigation from '../components/Navigation';
import Logo from '../components/Logo';
import Container from '../components/Container';
import Footer from '../components/Footer';

const Home = () => {

  return (
    <div>
      <Logo/>
      <Navigation/>
      <div className='banner'>
         {/* <img src="../public/IMG.png" alt="chez vous, partout et ailleurs" /> */}
         <h1>Chez vous, partout et ailleurs</h1>
      </div>
     <Container/>
     <Footer/>
    </div>
  );
};

export default Home;

