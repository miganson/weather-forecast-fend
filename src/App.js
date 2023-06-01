import React, { useContext } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, Outlet } from "react-router-dom";
import { AuthProvider, AuthContext } from "./auth";
import HomePage from "./components/HomePage/HomePage";
import LoginPage from "./components/LoginPage/LoginPage";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<PrivateRoute />} >
            <Route index element={<HomePage />} />
          </Route>
          <Route path="/login" element={<PublicRoute />} >
            <Route index element={<LoginPage />} />
          </Route>
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export function PrivateRoute() {
  const { user } = useContext(AuthContext);
  return user ? <Outlet /> : <Navigate to="/login" replace />;
}

export function PublicRoute() {
  const { user } = useContext(AuthContext);
  if (user) return <Navigate to="/" replace />;
  return <Outlet />;
}

export default App;
