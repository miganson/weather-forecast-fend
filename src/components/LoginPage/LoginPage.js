import React from "react";
import Modal from "react-modal";
import "./LoginPage.css";
import { useAuth0 } from "@auth0/auth0-react";
import Header from "../Header/Header";

Modal.setAppElement("#root");

function LoginPage() {
  const { loginWithRedirect } = useAuth0();

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
      </div>
    </div>
  );
}

export default LoginPage;
