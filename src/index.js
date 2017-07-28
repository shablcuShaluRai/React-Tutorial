import React from 'react';
import ReactDOM from 'react-dom';

import { HashRouter } from 'react-router-dom'
import './index.css';

import App from './App';
import registerServiceWorker from './registerServiceWorker';
// The <BrowserRouter> should be used when you have a server that will handle dynamic requests
//(knows how to respond to any possible URI),
// while the <HashRouter> should be used for static websites
ReactDOM.render((<HashRouter>
    <App/>
   </HashRouter>), document.getElementById('root'));

registerServiceWorker();
