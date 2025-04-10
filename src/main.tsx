import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import './assets/css/output.css'
import { AuthProvider } from './AuthContext';
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter basename={import.meta.env.BASE_URL}>
    <AuthProvider>
      <App />
    </AuthProvider>
    </BrowserRouter>
  </StrictMode>
);
