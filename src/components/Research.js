import React from "react";
import { Stack, Typography, Box, Button } from "@mui/material";

export default function Research() {
  return (
    <section id="research">
      <Stack spacing="20px">
        <Stack>
          <Typography variant="h4">research</Typography>
          <Typography variant="body1">
            * denotes equal contribution.{" "}
          </Typography>
        </Stack>
        <Stack spacing="20px">
          <Box>
            <Stack>
              <Typography variant="h6">
                DIDUP: Dynamic Iterative Development for UI Prototyping
              </Typography>
              <Typography>
                <span className="important-text">Jenny Ma*</span>, Karthik
                Sreedhar*, Vivian Liu, Sitong Wang, Pedro Alejandro Perez, Lydia
                B. Chilton
              </Typography>
              <Typography>
                <span style={{ fontStyle: "italic", color: "#498f63" }}>
                  Under Submission
                </span>
              </Typography>
              <Stack direction="row" spacing={"30px"} pt="5px">
                <Button disableRipple href="https://arxiv.org/abs/2407.08474">
                  <Typography className="link">arXiv</Typography>
                </Button>
                <Button disableRipple href="#/didup">
                  <Typography className="link">project</Typography>
                </Button>
                <Button disableRipple href="#/didup/poster">
                  <Typography className="link">poster</Typography>
                </Button>
                <Button
                  disableRipple
                  href="https://www.youtube.com/watch?v=TFMMlrnpfeY&ab_channel=jny"
                >
                  <Typography className="link">video</Typography>
                </Button>
              </Stack>
            </Stack>
          </Box>
          <Box>
            <Stack>
              <Typography variant="h6">
                Scrolly2Reel: Retargeting Graphics for Social Media Using
                Narrative Beats
              </Typography>
              <Typography>
                Duy Nguyen*, <span className="important-text">Jenny Ma*</span>,
                Pedro Alejandro Perez, Lydia B. Chilton
              </Typography>
              <Typography>
                <span style={{ fontStyle: "italic", color: "#498f63" }}>
                  Under Submission
                </span>
              </Typography>
              <Stack direction="row" spacing={"30px"} pt="5px">
                <Button disableRipple href="https://arxiv.org/abs/2403.18111">
                  <Typography className="link">arXiv</Typography>
                </Button>
                <Button disableRipple href="#/scrolly2reel">
                  <Typography className="link">project</Typography>
                </Button>
              </Stack>
            </Stack>
          </Box>
          <Box>
            <Stack>
              <Typography variant="h6">
                Generative Disco: Text-to-Video for Music Visualization
                <br />
              </Typography>
              <Typography>
                Vivian Liu, Tao Long,{" "}
                <span className="important-text">Jenny Ma</span>, Nathan Raw,
                Lydia B. Chilton
              </Typography>
              <Typography>
                <span style={{ fontStyle: "italic", color: "#498f63" }}>
                  {" "}
                  Under Submission
                </span>
              </Typography>
              <Stack direction="row" spacing={"30px"} pt="5px">
                <Button disableRipple href="https://arxiv.org/abs/2304.08551">
                  <Typography className="link">arXiv</Typography>
                </Button>
                <Button
                  disableRipple
                  href="https://www.youtube.com/watch?v=q22I53jHbuU&list=PLa3syNOZMtayyCxdYGE5T2tEF-Yc531tm&index=18&ab_channel=VivianL"
                >
                  <Typography className="link">video</Typography>
                </Button>
              </Stack>
            </Stack>
          </Box>
          <Box>
            <Stack>
              <Typography variant="h6">
                Tweet Trade: Using Sentiment Analysis for Stock Movement
                Prediction and Portfolio Optimization
                <br />
              </Typography>
              <Typography>
                <span className="important-text">Jenny Ma</span>, John Mulvey
              </Typography>
              <Typography>
                <span style={{ fontStyle: "italic", color: "#498f63" }}>
                  {" "}
                  senior thesis
                </span>
              </Typography>
              {/* <Stack direction="row" spacing={"30px"} pt="5px">
                <Button disableRipple href="/senior-thesis.pdf">
                  <Typography className="link">pdf</Typography>
                </Button>
              </Stack> */}
            </Stack>
          </Box>
        </Stack>
      </Stack>
    </section>
  );
}
