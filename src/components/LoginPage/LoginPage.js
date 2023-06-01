import React from "react";
import Modal from "react-modal";
import "./LoginPage.css";
import { useAuth0 } from "@auth0/auth0-react";

Modal.setAppElement("#root");

function LoginPage() {
  const { loginWithRedirect } = useAuth0();

  return (
    <div className="container">
      <button onClick={() => loginWithRedirect()} className="button">
        Log In
      </button>
      ;
    </div>
  );
}

export default LoginPage;
