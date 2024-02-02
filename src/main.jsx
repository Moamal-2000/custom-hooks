import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import GlobalContextProvider from "./Context/GlobalContext";
import "./GlobalStyles/index.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <GlobalContextProvider>
      <App />
    </GlobalContextProvider>
  </StrictMode>
);
