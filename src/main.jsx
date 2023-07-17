// react
import React from "react";
import ReactDOM from "react-dom/client";
// routing
import { BrowserRouter } from "react-router-dom";
//components
import App from "./App.jsx";
// css
import "./index.css";
// recoil js state management
import { RecoilRoot } from "recoil";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RecoilRoot>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </RecoilRoot>
  </React.StrictMode>
);
