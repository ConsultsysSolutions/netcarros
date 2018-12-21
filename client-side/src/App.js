import React, { Component } from 'react';
import { Router, Route } from 'react-router';

import carro from './carroHome.png';
import './css/style.less';

import Header   from './components/Header';
import Filtro   from './components/Filtro';
import Footer   from './components/Footer';
import Ranking  from './components/ranking/Ranking';

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
            <div className="ranking">
              <h3>Ranking dos modelos <span>mais procurados</span></h3>
              <Ranking />
            </div>
          </div>
        </div>

        <Footer />
      </div>
    );
  }
}

export default App;
