import React from "react";
import About from "./components/About";
import News from "./components/News";
import Research from "./components/Research";
import Header from "./components/Header";
import { Stack } from "@mui/material";

function App() {
  return (
    <main className="main page">
      <Stack
        spacing="30px"
        sx={{
          mx: "20%",
          maxWidth: "90%",
          justifyContent: "center",
          paddingBottom: "100px",
        }}
      >
        <Header />
        <About />
        <Research />
        <News />
      </Stack>
    </main>
  );
}

export default App;
