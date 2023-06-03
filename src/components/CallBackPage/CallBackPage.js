import React, { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Navigate } from "react-router-dom";
import "./CallBackPage.css";

function CallbackPage() {
  const {
    isAuthenticated,
    getAccessTokenSilently,
    loginWithRedirect,
    handleRedirectCallback,
  } = useAuth0();

  useEffect(() => {
    if (window.location.search) {
      handleRedirectCallback()
        .then(() => {
          if (isAuthenticated) {
            getAccessTokenSilently().catch((e) => {
              console.error(e);
              loginWithRedirect();
            });
          }
        })
        .catch((e) => {
          console.error(e);
        });
    }
  }, [
    isAuthenticated,
    getAccessTokenSilently,
    loginWithRedirect,
    handleRedirectCallback,
  ]);
  

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
