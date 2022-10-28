import React from 'react';
import logements from '../logements.json';
import Navigation from '../components/Navigation';
import Logo from '../components/Logo';

const Home = () => {

  return (
    <div>
      <Logo/>
      <Navigation/>
      <div className="card" key={logements.id}>
				<img className="img" src={logements.cover} alt="" />
      </div>
    </div>
  );
};

export default Home;

