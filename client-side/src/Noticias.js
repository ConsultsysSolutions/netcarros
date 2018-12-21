import React, { Component } from 'react';
import { Router, Route } from 'react-router';

import Header   from './components/Header';
import Footer   from './components/Footer';

class Noticias extends React.Component{
  render(){
    return(
      <div>
        <Header />
        <div className="container">
          <div className="row">
            <h2>Princiais Noticias</h2>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}

export default Noticias;
