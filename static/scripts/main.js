'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, hashHistory } from 'react-router';

import Home from './modules/Home';

ReactDOM.render((
    <Router history={hashHistory}>
        <Route path="/" component={Home}/>
    </Router>
), document.getElementById('main'))
