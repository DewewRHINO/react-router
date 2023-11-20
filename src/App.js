import React, { Component } from 'react';
import {Route, HashRouter, Routes } from 'react-router-dom';
 
import Home from './components/Home';
import Airbnb from './components/Airbnb';
import TicTacToe from './components/TicTacToe';
import Error from './components/Error';
import Navigation from './components/Navigation';
 
class App extends Component {
  render() {
    return (
       <HashRouter basename="/">
        <div>
          <Navigation />
            <Route exact path="/" element={<Home />} />
            <Route path="/airbnb" element={<Airbnb />} />
            <Route path="/tictactoe" element={<TicTacToe />} />
            <Route path="*" element={<Error />} />
        </div> 
      </HashRouter>
    );
  }
}
 
export default App;