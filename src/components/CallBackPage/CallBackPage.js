import React, { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Navigate } from "react-router-dom";
import "./CallBackPage.css";

function CallbackPage() {
  const { isAuthenticated, getAccessTokenSilently, loginWithRedirect } =
    useAuth0();

  useEffect(() => {
    if (isAuthenticated) {
      getAccessTokenSilently().catch((e) => {
        console.error(e);
        loginWithRedirect();
      });
    }
  }, [isAuthenticated, getAccessTokenSilently, loginWithRedirect]);

  if (isAuthenticated) {
    return <Navigate to="/" />;
  }

  return (
    <div className="loading-container">
      <div className="spinner"></div>
      <div>Loading...</div>
    </div>
  );
}

export default CallbackPage;
