import React from "react";
import ReactDOM from "react-dom/client";
import App from "./modules/App";
import './styles/App.scss';

const rootElement = document.getElementById("root")!;
const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
