import React, { Component } from 'react';
import $ from 'jquery';

class Filtro extends Component {

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
        <div id="filtro" className="filtromain">
          <div className="filtroTipos">
            <ul>
              <a>
                <li className=""><i className="fas fa-car"></i><p>Carros</p></li>
              </a>
              <a>
                <li className=""><i className="fas fa-motorcycle"></i><p>Motos</p></li>
              </a>
              <a>
                <li className=""><i className="fas fa-truck"></i><p>Caminhões</p></li>
              </a>
            </ul>
          </div>
          <form id="filtroGeral">
            <ul className="camposFiltro">
              <li className="col-md-5">
                <div><label>Digite sua busca</label><input type="text" /></div>
              </li>
              <li className="col-md-3">
                <div><label>Marca</label><select><option>Selecione</option></select><i className="fas fa-angle-down"></i></div>
              </li>
              <li className="col-md-4">
                <div><label>Modelo</label><select><option>Selecione</option></select><i className="fas fa-angle-down"></i></div>
              </li>
              <li className="col-md-2">
                <div><label>Estado</label><select><option>PA</option></select><i className="fas fa-angle-down"></i></div>
              </li>
              <li className="col-md-3">
                <div><label>Cidade</label><select><option>Selecione</option></select><i className="fas fa-angle-down"></i></div>
              </li>
              <li className="col-md-3">
                <div className="variante"><label>Valor</label><input type="text" placeholder="De"/> <span>-</span> <input type="text" placeholder="Até"/></div>
              </li>
              <li className="col-md-2">
                <div className="variante"><label>Ano</label><input type="text" placeholder="De"/> <span>-</span> <input type="text" placeholder="Até"/></div>
              </li>
              <li className="col-md-2">
                <input type="button" value="Buscar" className="btn btnDeepGray"/>
              </li>
            </ul>
          </form>
        </div>
      </div>
    )
  }
}

export default Filtro;
