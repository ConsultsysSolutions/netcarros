import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import logo from './logomain.png';

class Footer extends Component{
  render(){
    return(
      <div>
        <footer className="bgGray">
          <section className="container">
            <div className="row">
              <div className="col-md-4" id="logoFooter">
                <div id="logomain"><img src={ logo } /></div>
                <div id="logoLeiloeiro"><img src="" /></div>
              </div>
              <div className="col-md-6" id="links">
                <ul>
                  <Link to="/sobre"><li>como funciona?</li></Link>
                  <Link to="/privacidade"><li>politica de privacidade</li></Link>
                  <Link to="/estado"><li>no meu estado</li></Link>
                  <Link to="/contato"><li>contato</li></Link>
                  <Link to="/noticias"><li>notícias</li></Link>
                  <li>newsletter</li>
                </ul>

                <small className="centeredtxt">NetCarros 2018. Todos os direitos reservados. Desenvolvido por PrismIT.</small>
              </div>
              <div className="col-md-2" id="midias">
                <small>siga nas mídias sociais</small>
                <ul>
                  <a href="" target="_blank"><li className=""><i className="fab fa-facebook"></i></li></a>
                  <a href="" target="_blank"><li><i className="fab fa-instagram"></i></li></a>
                  <a href="" target="_blank"><li><i className="fab fa-twitter"></i></li></a>
                  <a href="" target="_blank"><li><i className="fab fa-linkedin"></i></li></a>
                </ul>
              </div>
            </div>
          </section>
        </footer>
      </div>
    )
  }
}

export default Footer;
