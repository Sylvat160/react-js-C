import React from "react";
import {Link} from 'react-router-dom';

import './header.css';

const Header = () => {
  return (
      <header>
        <nav>
          <ul>
            <li> <Link to="/home">Acceuil</Link> </li>
            <li> <Link to="/service">Service</Link> </li>
            <li> <Link to="/contact">Contacts</Link> </li>
            <li> <Link to="/admin">Admin</Link> </li>
          </ul>
        </nav>
      </header>
  );
};

export default Header;
