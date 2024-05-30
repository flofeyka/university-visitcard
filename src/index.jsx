import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { NextUIProvider } from "@nextui-org/react";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <NextUIProvider>
      <App />
    </NextUIProvider>
  </BrowserRouter>
);
