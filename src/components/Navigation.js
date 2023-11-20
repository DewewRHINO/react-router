import React from 'react';
 
import { NavLink } from 'react-router-dom';
 
const Navigation = () => {
    return (
       <div>
          <NavLink to="/">Home</NavLink>
          <br></br>
          <NavLink to="/airbnb">Airbnb</NavLink>
          <br></br>
          <NavLink to="/tictactoe">TicTacToe</NavLink>
          <br></br>
          <br></br>
          <br></br>
       </div>
    );
}
 
export default Navigation;