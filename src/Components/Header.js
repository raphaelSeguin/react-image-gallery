import React from 'react';
import {Route} from 'react-router-dom'

import Form from './Form.js';
import Navigation from './Navigation.js';

const Header = ({searchHandler}) =>
    <div className="header">
        <Route path='/search' component={Form} />
        <Route path='/search' component={Navigation} />
        <Route path='/presets' component={Navigation} />
    </div>

export default Header
