import React from 'react';
import { Link } from "react-router-dom";
import './header.css';

const Header = () => {
    return (
      <div className="AHeader">
        <div class="header">
          <a href="/" class="logo">
            CompanyLogo
          </a>
          <div class="header-right">
            <a class="active" href="#home">
               <Link to="/home">Acceuil</Link>
            </a>
            <a href="#contact">Contact</a>
            <a href="#about">Service</a>
          </div>
        </div>
      </div>
    );
};

export default Header;