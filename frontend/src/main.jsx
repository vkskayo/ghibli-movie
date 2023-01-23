import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import FilmPage from "./filmPage";
import { BrowserRouter, Routes, Route, redirect } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/film/:id" element={<FilmPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
