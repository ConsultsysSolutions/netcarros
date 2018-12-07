import React, { Component } from 'react';
import logo from './logomain.png';
import $ from 'jquery';

class Menu extends Component {

  componentDidMount(){
    $(document).ready(function(){
      $('.filtroTipos ul > a li').click(function(){
        $('.filtroTipos ul > a li').removeClass("selected");
        $(this).addClass("selected");
      });
    });
  }

  render(){
    return(
      <div>
        <header>
          <nav className="bgGray">
            <div className="container">
              <div className="row">
                <div>
                  <a href=""><img src={ logo } /></a>
                </div>
                <span id="detalhe"></span>
                <ul>
                  <li>
                    <a href="">como funciona?</a>
                  </li>
                  <li>
                    <a href="">politica de privacidade</a>
                  </li>
                  <li>
                    <a href="">no meu estado</a>
                  </li>
                  <li>
                    <a href="">noticias</a>
                  </li>
                  <li>
                    <a href="">contato</a>
                  </li>
                  <a href=""><li className="btn btnBlue btnTop">login</li></a>
                  <a href=""><li className="btn btnYellow btnTop">cadastre-se</li></a>
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
