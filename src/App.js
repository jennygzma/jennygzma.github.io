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
          width: "100%",
          maxWidth: "1160px",
          mx: "auto",
          px: { xs: "24px", sm: "40px", md: "56px", lg: "72px" },
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
