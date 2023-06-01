import React, { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Navigate } from "react-router-dom";

function CallbackPage() {
  const { isAuthenticated, getAccessTokenSilently, loginWithRedirect } =
    useAuth0();

    useEffect(() => {
        if (isAuthenticated) {
          getAccessTokenSilently().catch(e => {
            console.error(e);
            loginWithRedirect();
          });
        }
      }, [isAuthenticated, getAccessTokenSilently, loginWithRedirect]);

  if (isAuthenticated) {
    return <Navigate to="/" />;
  }

  return <div>Loading...</div>;
}

export default CallbackPage;
