import React, { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Navigate, useNavigate } from "react-router-dom";
import "./HomePage.css";
import Header from "../Header/Header";

function HomePage() {
  const { user, isAuthenticated, isLoading } = useAuth0();
  const [city, setCity] = useState("");
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
    navigate(`/weather/${city}`);
  };

  return (
    <div>
      <Header />
      <div className="homePage">
        <h1>{user?.name}</h1>
        <p>
          <a
            href={`https://github.com/${user?.nickname}`}
            target="_blank"
            rel="noreferrer"
          >
            https://github.com/{user?.nickname}
          </a>
        </p>
        <form onSubmit={handleWeatherNavigation}>
          <label>
            Enter your city:
            <input
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              required
              className="input"
            />
          </label>
          <button type="submit" className="button">
            Get Weather
          </button>
        </form>
      </div>
    </div>
  );
}

export default HomePage;
