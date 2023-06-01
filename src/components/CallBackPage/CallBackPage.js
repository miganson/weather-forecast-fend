import React, { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Navigate } from "react-router-dom";

function CallbackPage() {
  const { isAuthenticated, getAccessTokenSilently } = useAuth0();

  useEffect(() => {
    if (!isAuthenticated) {
      getAccessTokenSilently();
    }
  }, [isAuthenticated, getAccessTokenSilently]);

  if (isAuthenticated) {
    return <Navigate to="/" />;
  }

  return <div>Loading...</div>;
}

export default CallbackPage;
