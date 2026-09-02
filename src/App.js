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
          mx: { xs: "4%", sm: "6%", md: "8%", lg: "10%" },
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
