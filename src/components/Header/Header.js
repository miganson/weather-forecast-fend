import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import './Header.css';

function Header() {
  const { logout, isAuthenticated } = useAuth0();

  return (
    <div className="header">
      <h1>Weather Forecast</h1>
      {isAuthenticated && (
        <button 
          onClick={() => logout({ returnTo: window.location.origin })}
          className="button"
        >
          Log Out
        </button>
      )}
    </div>
  );
}

export default Header;
