import React, { Component } from 'react';

import logo from './logomain.png';

class Footer extends Component {
  render(){
    return(
      <div>
        <footer className="bgGray">
          <section>
            <div className="container">
              <div className="row">
                <div className="col-md-4" id="logoFooter">
                  <div id="logomain"><img src={ logo } /></div>
                  <div id="logoLeiloeiro"><img src="" /></div>
                </div>
                <div className="col-md-6" id="links">
                  <ul>
                    <a href=""><li>como funciona?</li></a>
                    <a href=""><li>politica de privacidade</li></a>
                    <a href=""><li>no meu estado</li></a>
                    <a href=""><li>contato</li></a>
                    <a href=""><li>notícias</li></a>
                    <a href=""><li>newsletter</li></a>
                  </ul>

                  <small className="centeredtxt">NetCarros 2018. Todos os direitos reservados. Desenvolvido por PrismIT.</small>
                </div>
                <div className="col-md-2" id="midias">
                  <small>siga nas mídias sociais</small>
                  <ul>
                    <a href=""><li className=""><i className="fab fa-facebook"></i></li></a>
                    <a href=""><li><i className="fab fa-instagram"></i></li></a>
                    <a href=""><li><i className="fab fa-twitter"></i></li></a>
                    <a href=""><li><i className="fab fa-linkedin"></i></li></a>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </footer>
      </div>
    )
  }
}

export default Footer;
