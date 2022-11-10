import React from 'react';
import { Link } from "react-router-dom";

import './sidemenu.css';

const SideMenu = () => {
    return (
      <div className="SideMenu">
        <div class="sidebar">
          <ul>
            <a class="active" href="#home">
            <li > <Link to="/admin/dashboard"> Dashboard </Link></li>
          </a>
            <a class="" href="#home">
            <li class="active dflex"> User 
              <ul>
                <li>
                  <Link to="/admin/user"> List </Link>
                </li>
                <li>
                  <Link to="/admin/user/add"> Add </Link>
                </li>
                <li>
                  <Link to="/admin/user/edit"> Edit </Link>
                </li>
              </ul> 
              </li> 
          </a>
            <a class="" href="#home">
            <li class="active dflex"> Cocktail 
              <ul>
                <li>
                  <Link to="/admin/cocktail"> List </Link>
                </li>
                <li>
                  <Link to="/admin/cocktail/edit"> add </Link>
                </li>
              </ul> 
              </li> 
          </a>

          </ul>
          
          {/* <a href="#news">News</a>
          <a href="#contact">Contact</a>
          <a href="#about">About</a> */}
          
        </div>
      </div>
    );
};

export default SideMenu;