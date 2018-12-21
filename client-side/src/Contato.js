import React, { Component } from 'react';
import { Router, Route } from 'react-router';

import Header   from './components/Header';
import Footer   from './components/Footer';

class Contato extends React.Component{
  render(){
    return(
      <div>
        <Header />
        <div className="container">
          <div className="row">
            <h2>Entre em Contato</h2>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}

export default Contato;
