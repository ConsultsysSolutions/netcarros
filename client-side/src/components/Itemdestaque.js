import React, { Component } from 'react';


class Itemdestaque extends Component{
  render(){
    return(
      <div className="item">
        <div className="imgDestaque"><img src="https://app.repplica.com.br/carro/2018_10/647466/647466_fb1082b2.jpg" /></div>
        <span>São José dos Campos - SP</span>
        <h5>CHEVROLET PRISMA</h5>
        <small>1.4 MPFI LTZ 8V Flex 4P Manual</small>
        <dl className="lanceAtual">
          <dt><small>Lance Atual</small></dt>
          <dd><span>R$</span>24.990,00</dd>
        </dl>
        <dl className="inicio">
          <dt><small>Início</small></dt>
          <dd>23/02/2019 - 16h</dd>
        </dl>
        <div className="verMais"><a href="#">VER MAIS</a></div>
      </div>
    )
  }
}

export default Itemdestaque;
