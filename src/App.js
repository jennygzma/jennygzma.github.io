import React from "react";
import About from "./components/About";
import News from "./components/News";
import Research from "./components/Research";
import Navbar from "./components/Navbar";
import { Stack } from "@mui/material";

function App() {
  return (
    <main className="main page">
      <Stack spacing="50px" sx={{ paddingBottom: "100px" }}>
        <Navbar />
        <About />
        <News />
        <Research />
      </Stack>
    </main>
  );
}

export default App;
