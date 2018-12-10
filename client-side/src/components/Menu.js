import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import logo from './logomain.png';

class Menu extends Component {
  render(){
    return(
      <div>
        <header>
          <nav className="bgGray">
            <div className="container">
              <div className="row">
                <div>
                  <Link to="/"><img src={ logo } /></Link>
                </div>
                <span id="detalhe"></span>
                  <ul>
                    <li>
                      <Link to="/">home</Link>
                    </li>
                    <li>
                      <Link to="/sobre">como funciona?</Link>
                    </li>
                    <li>
                      <Link to="/privacidade">politica de privacidade</Link>
                    </li>
                    <li>
                      <Link to="/estado">no meu estado</Link>
                    </li>
                    <li>
                      <Link to="/noticias">noticias</Link>
                    </li>
                    <li>
                      <Link to="/contato">contato</Link>
                    </li>
                    <li className="btn btnBlue btnTop">login</li>
                    <Link to="/cadastro"><li className="btn btnYellow btnTop">cadastre-se</li></Link>
                  </ul>
              </div>
            </div>
          </nav>
        </header>
      </div>
    )
  }
}

export default Menu;
