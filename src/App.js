import React, { Component } from 'react';
import './App.css';
import Search from './Search.js';
import Navigation from './Navigation.js';
import PhotoContainer from './PhotoContainer.js';

class App extends Component {
  render() {
    return (
            <div className="container">

              <Search />

              <Navigation />

              <PhotoContainer />

            </div>

    );
  }
}

export default App;
