import React from "react";
/** Import css file */
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/App.scss';
/** /--/ */
import ReactDOM from "react-dom/client";
import App from "./modules/App";

const rootElement = document.getElementById("root")!;
const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
