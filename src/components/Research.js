import React from "react";
import { Stack, Typography, Paper } from "@mui/material";

export default function Research() {
  return (
    <section id="research">
      <Stack spacing="30px" sx={{ width: "85%", margin: "auto" }}>
        <Typography variant="h4">research</Typography>
        <Stack spacing="20px" sx={{ margin: "auto" }}>
          <Stack spacing="5px">
            <Typography>
              ✨ coming soon! ✨ currently working on text to video for music
              visualization and image to image interpolation
            </Typography>
          </Stack>
          <Paper
            sx={{
              padding: "20px",
              backgroundColor: "#f2edd5",
              boxShadow: "#6dad85",
            }}
          >
            <Stack spacing="5px">
              <Typography variant="h6">
                <a className="link" href="/senior-thesis.pdf">
                  Tweet Trade: Using Sentiment Analysis for Stock Movement
                  Prediction and Portfolio Optimization
                </a>
                <br />
              </Typography>
              <Typography sx={{ paddingX: "10px" }}>
                <span className="important-text">Jenny Ma</span>, John Mulvey
              </Typography>
              <Typography sx={{ paddingX: "10px" }}>
                <span style={{ fontStyle: "italic", color: "#498f63" }}>
                  {" "}
                  senior thesis
                </span>
              </Typography>
            </Stack>
          </Paper>
        </Stack>
      </Stack>
    </section>
  );
}
