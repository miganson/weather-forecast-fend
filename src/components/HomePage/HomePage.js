import React, { useContext } from "react";
import { AuthContext } from "../../auth";

function HomePage() {
  const { user, logout } = useContext(AuthContext);

  return (
    <div>
      <h1>Welcome {user?.username}</h1>
      <button onClick={logout}>Logout</button>
    </div>
  );
}

export default HomePage;
