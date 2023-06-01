import React, { useContext } from "react";
import {
  BrowserRouter as Router,
  Route,
  Navigate,
  Routes,
} from "react-router-dom";
import { AuthProvider, AuthContext } from "./auth";
import HomePage from "./components/HomePage";
import LoginPage from "./components/LoginPage";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/" element={<PrivateRoute />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

function PrivateRoute() {
  const { user } = useContext(AuthContext);
  return user ? <HomePage /> : <Navigate to="/login" replace />;
}

export default App;
