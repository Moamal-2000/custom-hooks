import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import * as serviceWorker from "../public/registerPWA.js";
import App from "./App";
import GlobalContextProvider from "./Context/GlobalContext";
import HooksContextProvider from "./Context/HooksContext.jsx";
import ModesContextProvider from "./Context/ModesContext.jsx";
import "./Styles/colors.scss";
import "./Styles/index.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <GlobalContextProvider>
      <ModesContextProvider>
        <HooksContextProvider>
          <App />
        </HooksContextProvider>
      </ModesContextProvider>
    </GlobalContextProvider>
  </StrictMode>
);

serviceWorker.register();
