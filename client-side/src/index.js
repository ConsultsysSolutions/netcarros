import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


import './css/style.css';
import './css/bootstrap.min.css';
//import './js/scripts.js';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
