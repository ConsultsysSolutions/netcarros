import React, { Component } from 'react';

import Header   from './components/Header';
import Footer   from './components/Footer';

class Cadastro extends Component{
  render(){
    return(
      <div>
        <Header />
        <div className="container">
          <div className="row">
            <h2>Faça Seu cadastro</h2>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}

export default Cadastro;
