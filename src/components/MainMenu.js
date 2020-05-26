import React, { Component } from 'react';
import {
  BrowserRouter as Router,
 
  Link
} from "react-router-dom";
class MainMenu extends Component {
  render() {
    return (
  
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link to="/">Home</Link>
              </li>
              <li className="nav-item dropdown">
                <Link to="/about">About</Link> 
              </li>
              <li className="nav-item">
                <Link to="/blog">Blog</Link>
              </li>
            </ul>       
  
    );
  }
}

export default MainMenu;