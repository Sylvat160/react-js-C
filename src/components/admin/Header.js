import React from 'react';
import { Link } from "react-router-dom";
import { accountService } from '@/_services/account.service';
import { useNavigate } from 'react-router-dom';
import './header.css';

const Header = () => {

    let navigate = useNavigate();

  const logout = () => {
    accountService.logout();
    navigate('/', { replace: true });
  }

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
            <button onClick={logout}> Logout </button>
          </div>
        </div>
      </div>
    );
};

export default Header;