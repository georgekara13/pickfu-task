import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import Routes from "./Routes.jsx";
import ErrorBoundary from "./ErrorBoundary.jsx";

import "./index.css";

ReactDOM.render(
  <ErrorBoundary>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  </ErrorBoundary>,
  document.getElementById("root")
);
