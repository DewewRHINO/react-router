import React, { Component } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
 
import Home from './components/Home';
import Airbnb from './components/Airbnb';
import TicTacToe from './components/TicTacToe';
import Error from './components/Error';
import Navigation from './components/Navigation';
 
class App extends Component {
  render() {
    return (
       <BrowserRouter>
        <div>
          <Navigation />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Airbnb" element={<Airbnb />} />
            <Route path="/TicTacToe" element={<TicTacToe />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </div> 
      </BrowserRouter>
    );
  }
}
 
export default App;