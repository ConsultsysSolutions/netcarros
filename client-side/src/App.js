import React, { Component } from 'react';
import { Router, Route } from 'react-router';

import carro from './carroHome.png';
import './css/style.less';

import Header     from './components/Header';
import Filtro     from './components/Filtro';
import Footer     from './components/Footer';
import Ranking    from './components/ranking/Ranking';
import Destaques  from './components/Destaques';

class App extends Component {
  render() {
    return (
      <div>
        <Header />

        <div className="container">
          <div className="row">

            <div className="mainPage">
              <section className="containerFiltro">
                <div className="carroHome"><img src={ carro } /></div>
                <Filtro />
              </section>
              <section className="ranking">
                <h3 className="titleSection">Ranking dos modelos <span>mais procurados</span></h3>
                <Ranking />
              </section>

              <section className="destaques">
                <h3 className="titleSection">Destaques</h3>
                <a href="#" className="btn-compartilhar">
                  <i className="fab fa-facebook"></i> Compartilhar
                </a>
                <Destaques />
              </section>
            </div>

          </div>
        </div>

        <Footer />
      </div>
    );
  }
}

export default App;
