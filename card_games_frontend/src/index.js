import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './Component/Home';
import Snap from './Component/Snap';
import registerServiceWorker from './registerServiceWorker';
// import {render} from 'react-dom';
import {Router, Route} from 'react-router';


    // ReactDOM.render((
        
    // ), document.getElementById('root'));

    ReactDOM.render(
        <Router>
            <Route path="/" component={Home} />
            <Route path="/snap" component={Snap} />
        </Router>,
        document.getElementById('root')
    );

registerServiceWorker();