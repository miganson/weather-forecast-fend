import React, { useState, useEffect } from 'react';
import { useParams, Navigate, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useAuth0 } from "@auth0/auth0-react";
import Header from '../Header/Header';
import "./WeatherPage.css"; // Importing your new CSS file

function WeatherPage() {
  const { city } = useParams();
  const [weather, setWeather] = useState(null);
  const { isAuthenticated, isLoading } = useAuth0();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const weatherResponse = await axios.get(
          `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=344e9cedbb3c231ba11c196fc1fe7ac3&units=imperial`
        );

        setWeather(weatherResponse.data);
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    };

    fetchWeatherData();
  }, [city]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  if (!weather) {
    return <div>Loading...</div>;
  }

  return (
    <div className="weatherPage">
        <Header />
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
      <button className="button" onClick={() => navigate(-1)}>
        Back
      </button>
    </div>
  );
}

export default WeatherPage;
