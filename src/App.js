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
          mx: { xs: "5%", sm: "8%", md: "12%", lg: "15%" },
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
