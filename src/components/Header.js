import React from 'react';
import Navigation from './Navigation.js';

const Header = () => {
  return (
    <header className="card-header">
      <h1 className="mb-0 text-center">
          Retno <span className="text-primary">Damayanti</span>
        </h1>
      <Navigation />
    </header>
  );
};

export default Header;
