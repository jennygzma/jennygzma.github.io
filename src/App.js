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
        spacing="12px"
        sx={{
          mx: { xs: "6%", sm: "8%", md: "10%", lg: "12%" },
          maxWidth: "100%",
          justifyContent: "center",
          paddingBottom: { xs: "50px", md: "100px" },
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
