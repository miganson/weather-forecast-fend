import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";
import Header from "../Header/Header";
import { Navigate } from "react-router-dom";
import "./WeatherPage.css";
import { WEATHER_API_BASE_URL } from "../../apiConstants";


function WeatherPage() {
  const { city } = useParams();
  const [weather, setWeather] = useState(null);
  const { isAuthenticated, isLoading: authLoading } = useAuth0();
  const navigate = useNavigate();

  const [hasError, setHasError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const weatherResponse = await axios.get(
          `${WEATHER_API_BASE_URL}/weather?q=${city}&appid=${process.env.REACT_APP_WEATHER_API_KEY}&units=imperial`
        );
        setWeather(weatherResponse.data);
        setHasError(false);
      } catch (error) {
        console.error("Error fetching weather data:", error);
        setHasError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchWeatherData();
  }, [city]);

  if (authLoading || loading) {
    return (
      <div className="loading-container">
        <div className="spinner"></div>
        <div>Loading weather data...</div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  if (hasError) {
    return (
      <div className="weatherPage">
        <Header />
        <h1>Error fetching weather data for {city}</h1>
        <p>The city name may be incorrect, please go back and try again.</p>
        <button className="backButton" onClick={() => navigate("/")}>
          Back
        </button>
      </div>
    );
  }

  // Check if weather data is available before trying to display it
  if (!weather) {
    return null;
  }

  return (
    <div className="weatherPage">
      <Header weatherDescription={weather?.weather[0]?.main} />
      <h1 className="city">Weather for {city}</h1>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Temp(F)</th>
            <th>Description</th>
            <th>Main</th>
            <th>Pressure</th>
            <th>Humidity</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{new Date().toLocaleDateString()}</td>
            <td>{weather.main.temp}</td>
            <td>{weather.weather[0].description}</td>
            <td>{weather.weather[0].main}</td>
            <td>{weather.main.pressure}</td>
            <td>{weather.main.humidity}</td>
          </tr>
        </tbody>
      </table>
      <button className="backButton" onClick={() => navigate("/")}>
        Back
      </button>
    </div>
  );
}

export default WeatherPage;
