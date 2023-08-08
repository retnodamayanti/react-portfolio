import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './index.css';
import './styles.css';
import './scripts.js';
import Routes from './Routes';

function App() {
  useEffect(() => {
    // Add id="page-top" to the body element
    document.body.id = 'page-top';

    // Clean up the id attribute when the component is unmounted
    return () => {
      document.body.id = '';
    };
  }, []); // The empty dependency array ensures that the effect runs only once

  return (
    <div className="app">
      <Routes />
    </div>
  );
}

export default App;
