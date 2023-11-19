import React from "react";
import ExperiencesComponent from "./components/Experiences";
import Navbar from "./components/Navbar";
import { Stack } from "@mui/material";

function Experiences() {
  return (
    <main className="experiences page">
      <Stack spacing="50px" sx={{ paddingBottom: "100px" }}>
        <Navbar />
        <ExperiencesComponent />
      </Stack>
    </main>
  );
}

export default Experiences;
