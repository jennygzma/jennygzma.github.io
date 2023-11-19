import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Experiences from "./Experiences";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/experiences" element={<Experiences />} />
        <Route
          path="/cv.pdf"
          element={
            <div>
              <iframe
                src="../public/cv.pdf"
                title="CV"
                width="100%"
                height="800px"
              ></iframe>
            </div>
          }
        />
        <Route
          path="/senior-thesis.pdf"
          element={
            <div>
              <iframe
                src="../public/senior-thesis.pdf"
                title="CV"
                width="100%"
                height="800px"
              ></iframe>
            </div>
          }
        />
      </Routes>
    </Router>
  </React.StrictMode>,
);
