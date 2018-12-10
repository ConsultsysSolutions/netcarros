import React, { Component } from 'react';

import Header   from './components/Header';
import Footer   from './components/Footer';

class Privacidade extends Component{
  render(){
    return(
      <div>
        <Header />
        <div className="container">
          <div className="row">
            <h2>Nossa Política de Privacidade</h2>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}

export default Privacidade;
