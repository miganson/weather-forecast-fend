import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";
import "./styles/GlobalStyles.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Auth0Provider
    domain="dev-d35sebg2bgvlyo28.us.auth0.com"
    clientId="GVqhDCd9K1Pv9znogWcN9wgXJlRLIpuV"
    authorizationParams={{
      redirect_uri: `${window.location.origin}/callback`,
    }}
    cacheLocation="localstorage"
  >
    <App />
  </Auth0Provider>
);
