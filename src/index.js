import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/index.css";
import App from "./App";
import Contact from "./Contact";
import Partner from "./Partner";
import NotFound from "./NotFound";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<App />} />
      <Route exact path="/contact" element={<Contact />} />
      <Route exact path="/devenirpartenaire" element={<Partner />} />
      <Route exact path="/*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);
