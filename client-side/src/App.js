import React, { Component } from 'react';

import './css/style.css';
import carro from './carroHome.png';

import Header   from './components/Header';
import Filtro   from './components/Filtro';
import Footer   from './components/Footer';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="container">
          <div className="row">
            <div className="containerFiltro">
              <div className="carroHome"><img src={ carro } /></div>
              <Filtro />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
