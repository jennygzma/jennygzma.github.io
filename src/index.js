import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Experiences from "./Experiences";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Scrolly2Reel from "./projects/scrolly2reel/Scrolly2Reel";
import { Typography } from "@mui/material";
import Didup from "./projects/didup/didup";
import Dynex from "./projects/dynex/Dynex";
import AgentDynex from "./projects/agentdynex/AgentDynex";
import DidupPoster from "./projects/didup/poster";
import OnePiece from "./components/OnePiece";

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
        <Route path="/scrolly2reel" element={<Scrolly2Reel />} />
        <Route path="/dynex" element={<Dynex />} />
        <Route path="/agentdynex" element={<AgentDynex />} />
        <Route path="/didup" element={<Didup />} />
        <Route path="/didup/poster" element={<DidupPoster />} />
        <Route path="/one-piece" element={<OnePiece />} />
      </Routes>
    </Router>
  </React.StrictMode>,
);
