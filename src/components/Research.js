import React from "react";
import { Stack, Typography, Box, Button, Divider } from "@mui/material";
import franky from "./assets/franky.png";
import brook from "./assets/brook.jpg";
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
              <Stack direction="row" alignItems="center" spacing="10px">
                <img width="40px" height="40px" alt="franky" src={franky} />
                <Typography
                  variant="h6"
                  sx={{ display: "flex", alignItems: "flex-end" }}
                >
                  DynEx: Dynamic Code Synthesis with Structured Design
                  Exploration for Accelerated Exploratory Programming
                </Typography>
              </Stack>
              <Typography>
                <span className="important-text">Jenny Ma</span>, Karthik
                Sreedhar, Vivian Liu, Sitong Wang, Pedro Alejandro Perez, Riya
                Sahni, Lydia B. Chilton
              </Typography>
              <Typography>
                <span style={{ fontStyle: "italic", color: "#498f63" }}>
                  CHI 2025, 🎖️ Best Paper Honorable Mention (top 5% of
                  submissions)
                </span>
              </Typography>
              <Stack direction="row" spacing={"30px"} pt="5px">
                <Button disableRipple href="https://arxiv.org/abs/2410.00400">
                  <Typography className="link"> 📄 arXiv</Typography>
                </Button>
                <Button disableRipple href="#/dynex">
                  <Typography className="link">🚀 project</Typography>
                </Button>
                {/* <Button disableRipple href="#/didup/poster">
                  <Typography className="link">poster</Typography>
                </Button> */}
                <Button
                  disableRipple
                  href="https://www.youtube.com/watch?v=ZYbXXdvsLk0&ab_channel=jny"
                >
                  <Typography className="link">🎥 video</Typography>
                </Button>
                <Button
                  disableRipple
                  href="https://github.com/jennygzma/ui-design-prototype"
                >
                  <Typography className="link">👨‍💻 github</Typography>
                </Button>
              </Stack>
            </Stack>
          </Box>
          <Box>
            <Stack>
              <Stack direction="row" spacing="10px" alignItems="center">
                <img width="40px" height="40px" alt="franky" src={brook} />
                <Typography variant="h6">
                  Scrolly2Reel: Retargeting Graphics for Social Media Using
                  Narrative Beats
                </Typography>
              </Stack>
              <Typography>
                Duy Nguyen*, <span className="important-text">Jenny Ma*</span>,
                Pedro Alejandro Perez, Lydia B. Chilton
              </Typography>
              <Typography>
                <span style={{ fontStyle: "italic", color: "#498f63" }}>
                  HICSS 2025
                </span>
              </Typography>
              <Stack direction="row" spacing={"30px"} pt="5px">
                <Button disableRipple href="https://arxiv.org/abs/2403.18111">
                  <Typography className="link">📄 arXiv</Typography>
                </Button>
                <Button disableRipple href="#/scrolly2reel">
                  <Typography className="link">🚀 project</Typography>
                </Button>
                <Button
                  disableRipple
                  href="https://github.com/duynguyen158/Scrolly2Reel"
                >
                  <Typography className="link">🎥 video</Typography>
                </Button>
              </Stack>
            </Stack>
          </Box>
          <Divider />
          <Box>
            <Stack>
              <Typography variant="h6">
                JumpStarter: Getting Started on Personal Goals with AI-Powered
                Context Curation
              </Typography>
              <Typography>
                Sitong Wang*, Billy Zhang*,{" "}
                <span className="important-text">Jenny Ma</span>, Alyssa Hwang,
                Lydia B. Chilton
              </Typography>
              <Typography>
                <span style={{ fontStyle: "italic", color: "#498f63" }}>
                  Under Submission to DIS 2025
                </span>
              </Typography>
              <Stack direction="row" spacing={"30px"} pt="5px">
                <Button disableRipple href="https://arxiv.org/pdf/2410.03882">
                  <Typography className="link">📄 arXiv</Typography>
                </Button>
                {/* <Button disableRipple href="#/didup">
                  <Typography className="link">project</Typography>
                </Button> */}
                {/* <Button disableRipple href="#/didup/poster">
                  <Typography className="link">poster</Typography>
                </Button> */}
                <Button
                  disableRipple
                  href="https://www.youtube.com/watch?v=Fml_SF-rFsE"
                >
                  <Typography className="link">🎥 video</Typography>
                </Button>
              </Stack>
            </Stack>
          </Box>
          <Box>
            <Stack>
              <Typography variant="h6">
                Simulating Cooperative Prosocial Behavior with Multi-Agent LLMs:
                Evidence and Mechanisms for AI Agents to Inform Policy Decisions
              </Typography>
              <Typography>
                Karthik Sreedhar, Alice Cai,
                <span className="important-text"> Jenny Ma</span>, Jeffrey
                Nickerson, Lydia B. Chilton
              </Typography>
              <Typography>
                <span style={{ fontStyle: "italic", color: "#498f63" }}>
                  IUI 2025
                </span>
              </Typography>
              <Stack direction="row" spacing={"30px"} pt="5px">
                <Button disableRipple href="https://arxiv.org/abs/2502.12504">
                  <Typography className="link">📄 arXiv</Typography>
                </Button>
                {/* <Button disableRipple href="#/didup">
                  <Typography className="link">project</Typography>
                </Button> */}
                {/* <Button disableRipple href="#/didup/poster">
                  <Typography className="link">poster</Typography>
                </Button> */}
                {/* <Button
                  disableRipple
                  href="https://www.youtube.com/watch?v=Fml_SF-rFsE"
                >
                  <Typography className="link">video</Typography>
                </Button> */}
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
                  HICSS 2025
                </span>
              </Typography>
              <Stack direction="row" spacing={"30px"} pt="5px">
                <Button disableRipple href="https://arxiv.org/abs/2304.08551">
                  <Typography className="link">📄 arXiv</Typography>
                </Button>
                <Button
                  disableRipple
                  href="https://www.youtube.com/watch?v=q22I53jHbuU&list=PLa3syNOZMtayyCxdYGE5T2tEF-Yc531tm&index=18&ab_channel=VivianL"
                >
                  <Typography className="link">🎥 video</Typography>
                </Button>
              </Stack>
            </Stack>
          </Box>
          <Box>
            <Stack>
              {/* <Typography variant="h6">
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
              </Typography> */}
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
