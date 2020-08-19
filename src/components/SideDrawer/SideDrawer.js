import React from 'react';

import './SideDrawer.css';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// import Home from "../../pages/Home";
// import Portfolio from "../../pages/Portfolio";
// import Resume from "../../pages/Resume";
// import Skills from "../../pages/Skills";

const sideDrawer = props => {
  let drawerClasses = 'side-drawer';
  if (props.show) {
    drawerClasses = 'side-drawer open';
  }
  return (
    <nav className={drawerClasses}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/services">Services</Link>
        </li>
      
        <li>
        <Link to="/journey">Journey</Link>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li>
      
      
        </ul>
    
        </nav>
        
  );
};

export default sideDrawer;
