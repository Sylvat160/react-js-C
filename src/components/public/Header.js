import React from "react";
import {Link} from 'react-router-dom';

const Header = () => {
  return (
    <div className="Header">
      <header>
        <nav>
          <ul>
            <li> <Link to="/home">Acceuil</Link> </li>
            <li> <Link to="/service">Service</Link> </li>
            <li> <Link to="/contact">Contacts</Link> </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Header;
