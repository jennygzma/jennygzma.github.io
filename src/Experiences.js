import React from "react";
import ExperiencesComponent from "./components/Experiences";
import Header from "./components/Header";
import { Stack } from "@mui/material";

function Experiences() {
  return (
    <main className="industry experience">
      <Stack
        spacing="30px"
        sx={{
          mx: "20%",
          maxWidth: "1800px",
          justifyContent: "center",
          paddingBottom: "100px",
        }}
      >
        <Header />
        <ExperiencesComponent />
      </Stack>
    </main>
  );
}

export default Experiences;
