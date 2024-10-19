import React from 'react';
import { Link } from 'react-router-dom';

function Header({ account }) {
  return (
    <header>
      <nav>
        <ul>
          <li><Link to="/">Dashboard</Link></li>
          <li><Link to="/marketplace">Marketplace</Link></li>
          <li><Link to="/profile">Profile</Link></li>
        </ul>
      </nav>
      {/* <div>
        {account ? `Connected: ${account.slice(0, 6)}...${account.slice(-4)}` : 'Not connected'}
      </div> */}
    </header>
  );
}

export default Header;

