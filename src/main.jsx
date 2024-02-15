import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import GlobalContextProvider from "./Context/GlobalContext";
import "./Styles/colors.scss";
import "./Styles/index.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
  <GlobalContextProvider>
    <App />
  </GlobalContextProvider>
);
