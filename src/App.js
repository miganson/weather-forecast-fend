import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import LoginPage from "./components/LoginPage/LoginPage";
import CallbackPage from "./components/CallBackPage/CallBackPage";
import WeatherPage from "./components/WeatherPage/WeatherPage";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/callback" element={<CallbackPage />} />
        <Route path="/weather/:city" element={<WeatherPage />} />
      </Routes>
    </Router>
  );
}

export default App;
