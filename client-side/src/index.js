import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './css/style.css';
import './css/style.less';
import './css/bootstrap.min.css';

import App from './App';
import Sobre from './Sobre';
import Privacidade from './Privacidade';
import Estado from './Estado';
import Noticias from './Noticias';
import Contato from './Contato';
import Cadastro from './Cadastro';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  (
    <BrowserRouter>
      <Switch>
        <Route path={ '/' } exact component={ App } />
        <Route path={ '/sobre' } exact component={ Sobre } />
        <Route path={ '/privacidade' } exact component={ Privacidade } />
        <Route path={ '/estado' } exact component={ Estado } />
        <Route path={ '/noticias' } exact component={ Noticias } />
        <Route path={ '/contato' } exact component={ Contato } />
        <Route path={ '/cadastro' } exact component={ Cadastro } />
      </Switch>
    </BrowserRouter>
  ),
  document.getElementById('root')
);

serviceWorker.unregister();
