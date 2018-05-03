import React from 'react';
import {Route} from 'react-router-dom'

import Form from './Form.js';
import Form2 from './Form2.js';
import Navigation from './Navigation.js';

const Header = ({searchHandler}) =>
    <div className="header">
        <Route path='/search' component={Form2} />


        {/* <Route
            path="/search"
            component={ () =>
                <Form
                    searchHandler={searchHandler}/>
            }/> */}
        <Navigation />
    </div>

export default Header
