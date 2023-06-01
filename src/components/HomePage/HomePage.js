import React, { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Navigate, useNavigate } from "react-router-dom";
import "./HomePage.css";
import Header from "../Header/Header";

function HomePage() {
  const { user, logout, isAuthenticated, isLoading } = useAuth0();
  const [city, setCity] = useState("");
  const navigate = useNavigate();

  if (isLoading) {
    return <div>Loading...</div>;
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
            />
          </label>
          <button type="submit">Get Weather</button>
        </form>
        <button
          onClick={() =>
            logout({ logoutParams: { returnTo: window.location.origin } })
          }
          className="button"
        >
          Log Out
        </button>
      </div>
    </div>
  );
}

export default HomePage;
