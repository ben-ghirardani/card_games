import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Container/App';
import Snap from './Component/Snap';
import registerServiceWorker from './registerServiceWorker';
import {HashRouter, Route, Switch} from 'react-router-dom';

    ReactDOM.render(
            <HashRouter> 
            <Switch>
                <Route exact path='/' component={App} />
                <Route exact path='/snap' component={Snap} />
            </Switch>
          </HashRouter>  
            , document.getElementById('root'));

registerServiceWorker();