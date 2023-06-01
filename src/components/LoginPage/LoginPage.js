import React from "react";
import "./LoginPage.css";
import { useAuth0 } from "@auth0/auth0-react";
import Header from "../Header/Header";

function LoginPage() {
  const { loginWithRedirect, error } = useAuth0();

  return (
    <div className="container">
      <Header />
      <div className="loginPage">
        <div className="welcome-text">
          Welcome to the Weather Forecast App. Please log in with your GitHub
          account to use the application and view the weather in your city.
        </div>
        <button onClick={() => loginWithRedirect()} className="button">
          Log In
        </button>
        {error && <p>{error.message}</p>}
      </div>
    </div>
  );
}

export default LoginPage;
