import React from "react";
import ReactDOM from "react-dom/client";
import "../node_modules/highlight.js/styles/hybrid.css";
import App from "./App";
import GlobalContextProvider from "./Context/GlobalContext";
import "./globalStyles/index.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
  <GlobalContextProvider>
    <App />
  </GlobalContextProvider>
);
