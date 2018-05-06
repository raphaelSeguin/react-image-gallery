import React, {Component} from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import key from './config.js';

import Header from './Components/Header.js';
import Container from './Components/Container.js';

class App extends Component {

    // the keyCounter variable ensures the route is re-rendered everytime, even if the route is the same, by changing the key prop value every time the route is matched. Tell me if you know a cleaner way, it's the only thing that worked for me.
    constructor() {
        super();
        this.keyCounter = 0;
    }
    // passes a key, the word to query and the API key
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

                    {/* Fallback for root */}
                        <Route
                            exact path='/'
                            render={ () => <Redirect to='presets/cats' /> } />
                    {/* Fallback for any other route (404) */}
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
