import React from 'react';

import './sidemenu.css';

const SideMenu = () => {
    return (
      <div className="SideMenu">
        <div class="sidebar">
          <a class="active" href="#home">
            Home
          </a>
          <a href="#news">News</a>
          <a href="#contact">Contact</a>
          <a href="#about">About</a>
        </div>
      </div>
    );
};

export default SideMenu;