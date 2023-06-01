import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Navigate } from "react-router-dom";

function HomePage() {
  const { user, logout, isAuthenticated } = useAuth0();

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return (
    <div>
      <h1>Welcome {user?.name}</h1>
      <button
        onClick={() =>
          logout({ logoutParams: { returnTo: window.location.origin } })
        }
        className="button"
      >
        Log Out
      </button>
    </div>
  );
}

export default HomePage;
