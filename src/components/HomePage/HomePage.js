import React, { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Navigate, useNavigate } from "react-router-dom";
import "./HomePage.css";
import Header from "../Header/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

function HomePage() {
  const { user, isAuthenticated, isLoading } = useAuth0();
  const [city, setCity] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  if (isLoading) {
    return (
      <div className="loading-container">
        <div className="spinner"></div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  const handleWeatherNavigation = (e) => {
    e.preventDefault();
    if (city.trim() === "") {
      setError("City name cannot be empty.");
    } else {
      setError("");
      navigate(`/weather/${city}`);
    }
  };

  return (
    <div>
      <Header />
      <div className="homePage">
        <h1>{user?.name}</h1>
        <p>
          Visit my GitHub:
          <a
            href={`https://github.com/${user?.nickname}`}
            target="_blank"
            rel="noreferrer"
            className="github-link"
          >
            {`https://github.com/${user?.nickname}`}
          </a>
        </p>
        <form onSubmit={handleWeatherNavigation}>
          <label>
            Enter your city:
            <div className="search-input">
              <input
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="input"
                required
              />
              <FontAwesomeIcon icon={faSearch} className="search-icon" />
            </div>
          </label>
          <button type="submit" className="button">
            Get Weather
          </button>
          {error && <p className="error-message">{error}</p>}
        </form>
      </div>
    </div>
  );
}

export default HomePage;
