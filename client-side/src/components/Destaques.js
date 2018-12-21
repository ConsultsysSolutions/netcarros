import React, { Component } from 'react';

import Itemdestaque from './Itemdestaque';

class Destaques extends Component{
  render(){
    return(
      <div>

        <ul id="destaquesHome">
          <li className="col-md-3"><Itemdestaque /></li>
          <li className="col-md-3"><Itemdestaque /></li>
          <li className="col-md-3"><Itemdestaque /></li>
          <li className="col-md-3"><Itemdestaque /></li>
        </ul>

      </div>
    )
  }
}

export default Destaques;
