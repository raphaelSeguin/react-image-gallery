import React, {Component} from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import key from './config.js';

import Header from './Components/Header.js';
import Container from './Components/Container.js';

class App extends Component {

    constructor() {
        super();
        this.keyCounter = 0;
    }

    routeHandler = ({match}) =>
        <Container
            key={this.keyCounter++}
            keyWord={match.params.query}
            apiKey={key} />

    render() {
        return (
            <BrowserRouter>
                <div className="container">
                    <Header />
                    <Switch>
                        <Route
                            path='/search/:query'
                            render={this.routeHandler} />
                        <Route
                            path='/search/'
                            render={this.routeHandler} />
                        <Route
                            path='/presets/:query'
                            render={this.routeHandler} />
                        <Route
                            exact path='/'
                            render={ () => <Redirect to='presets/cats' /> } />
                        <Route
                            path='/'
                            render={ () =>
                                <div>
                                    <h1>404</h1>
                                    <h1>There's nothing here for you to see!</h1>
                                </div> } />
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }

}

export default App;
