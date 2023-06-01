import React, { useState, useEffect } from "react";
import { useParams, Navigate } from "react-router-dom";
import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";

function WeatherPage() {
  const { city } = useParams();
  const [weather, setWeather] = useState(null);
  const { isAuthenticated, isLoading } = useAuth0();

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const weatherResponse = await axios.get(
          `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=344e9cedbb3c231ba11c196fc1fe7ac3&units=metric`
        );

        const weatherDescription = weatherResponse.data.weather[0].description;
        setWeather(weatherDescription);
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

  return (
    <div>
      <h1>Weather for {city}</h1>
      <p>{weather}</p>
    </div>
  );
}

export default WeatherPage;
