import React from "react";
import { Stack, Typography, Paper, Box } from "@mui/material";

export default function Research() {
  return (
    <section id="research">
      <Stack spacing="30px" sx={{ width: "85%", margin: "auto" }}>
        <Typography variant="h4">research</Typography>
        <Stack spacing="20px" sx={{ margin: "auto" }}>
          <Box
            sx={{
              padding: "20px",
            }}
          >
            <Stack spacing="5px">
              <Typography variant="h6">
                <a className="link" href="https://arxiv.org/abs/2304.08551">
                  Generative Disco: Text-to-Video for Music Visualization
                </a>
                <br />
              </Typography>
              <Typography sx={{ paddingX: "10px" }}>
                Vivian Liu, Tao Long,{" "}
                <span className="important-text">Jenny Ma</span>, Nathan Raw,
                Lydia Chilton
              </Typography>
              <Typography sx={{ paddingX: "10px" }}>
                <span style={{ fontStyle: "italic", color: "#498f63" }}>
                  {" "}
                  Under Submission to DIS 2024
                </span>
              </Typography>
            </Stack>
          </Box>
          <Box
            sx={{
              padding: "20px",
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
          </Box>
        </Stack>
      </Stack>
    </section>
  );
}
