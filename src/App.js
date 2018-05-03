import React, {Component} from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import key from './config.js';

import Header from './Components/Header.js';
import Container from './Components/Container.js';

class App extends Component {

    constructor() {
        super();
        this.state = {
            keyWord: ''
        }
    }

    searchHandler = (event, searchString) => {
        event.preventDefault();
        this.setState({ keyWord: searchString });
    }

    render() {
        return (
            <BrowserRouter>
                <div className="container">
                    <Header
                        searchHandler={this.searchHandler}/>
                    <Switch>
                        <Route
                            path='/fishes'
                            component={
                                () => <Container
                                    keyWord="fishes"
                                    apiKey={key} />
                            } />
                        <Route
                            path='/cats'
                            component={
                                () => <Container
                                    keyWord="cats"
                                    apiKey={key} />
                            } />
                        <Route
                            path='/catfishes'
                            component={
                                () => <Container
                                    keyWord="catfishes"
                                    apiKey={key} />
                            } />
                        <Route
                            path='/search/:query'
                            component={Container}
                        />
                        {/* <Redirect to='/blablala' /> */}
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }

}

export default App;
