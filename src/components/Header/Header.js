import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCloud,
  faBolt,
  faCloudRain,
  faSun,
} from "@fortawesome/free-solid-svg-icons";
import "./Header.css";

function Header({ weatherDescription }) {
  const { logout, isAuthenticated, isLoading } = useAuth0();
  let returnURL =
    process.env.NODE_ENV === "development"
      ? process.env.REACT_APP_LOCAL_URL
      : process.env.REACT_APP_URL;

  console.log(process.env.NODE_ENV);

  if (isLoading) {
    return (
      <div className="loading-container">
        <div className="spinner"></div>
        <div>Loading data...</div>
      </div>
    );
  }

  const getCloudIcon = () => {
    if (weatherDescription === "cloudy") {
      return <FontAwesomeIcon icon={faCloud} className="cloud-icon" />;
    } else if (weatherDescription === "stormy") {
      return <FontAwesomeIcon icon={faBolt} className="cloud-icon" />;
    } else if (weatherDescription === "Rain") {
      return <FontAwesomeIcon icon={faCloudRain} className="cloud-icon" />;
    } else if (weatherDescription === "Clear") {
      return <FontAwesomeIcon icon={faSun} className="sunny-icon" />;
    } else {
      return <FontAwesomeIcon icon={faCloud} className="cloud-icon" />;
    }
  };

  return (
    <div className="header">
      <div className="cloud-container">
        {getCloudIcon()}
        <h1>Weather Forecast</h1>
      </div>
      {isAuthenticated && (
        <button
          onClick={() => logout({ returnTo: returnURL })}
          className="header-button"
        >
          Log Out
        </button>
      )}
    </div>
  );
}

export default Header;
