import React from 'react';
import logements from '../logements.json';
import Navigation from '../components/Navigation';

const Home = () => {

  return (
    <div>
      <Navigation/>
      <div className="card" key={logements.id}>
				<img className="img" src={logements.cover} alt="" />
      </div>
    </div>
  );
};

export default Home;

