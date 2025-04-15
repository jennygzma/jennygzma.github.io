import React from "react";
import { Stack, Typography } from "@mui/material";

export default function News() {
  return (
    <section id="news">
      <Stack spacing="20px">
        <Typography variant="h4">news</Typography>
        <Stack spacing="10px">
          <Stack direction="row" spacing="20px">
            <Typography className="important-text">[05/2025]</Typography>
            <Typography>Presented DynEx at CHI 2025!!! 🌸🇯🇵🌸</Typography>
          </Stack>
          <Stack direction="row" spacing="20px">
            <Typography className="important-text">[03/2025]</Typography>
            <Typography>
              DynEx won Best Paper Honorable Mention at CHI 2025! 🏅
            </Typography>
          </Stack>
          <Stack direction="row" spacing="20px">
            <Typography className="important-text">[03/2025]</Typography>
            <Typography>
              Presented DynEx's poster at Columbia's
              <a
                href="https://daplab.cs.columbia.edu/workshop/index.html"
                className="link"
              >
                Agents for Work
              </a>{" "}
              conference!
            </Typography>
          </Stack>
          <Stack direction="row" spacing="20px">
            <Typography className="important-text">[01/2025]</Typography>
            <Typography>
              Simulating Cooperative Behaviors accepted to IUI 2025 and DynEx
              accepted to CHI 2025 (see you in Japan 🌸🇯🇵🌸)!
            </Typography>
          </Stack>
          <Stack direction="row" spacing="20px">
            <Typography className="important-text">[01/2025]</Typography>
            <Typography>Presented Scrolly2Reel at HICSS 2025!</Typography>
          </Stack>
          <Stack direction="row" spacing="20px">
            <Typography className="important-text">[08/2024]</Typography>
            <Typography>
              Scrolly2Reel and Generative Disco accepted to HICSS 2025!
            </Typography>
          </Stack>
          <Stack direction="row" spacing="20px">
            <Typography className="important-text">[09/2023]</Typography>
            <Typography>
              started MS thesis track at Columbia University.
            </Typography>
          </Stack>
          <Stack direction="row" spacing="20px">
            <Typography className="important-text">[01/2023]</Typography>
            <Typography>
              joined series a devex startup called Trunk (ex Uber ATG) as a full
              stack engineer
            </Typography>
          </Stack>
          <Stack direction="row" spacing="20px">
            <Typography className="important-text">[08/2021]</Typography>
            <Typography>
              started job at DoorDash on alcohol product team as a backend SWE
            </Typography>
          </Stack>
          <Stack direction="row" spacing="20px">
            <Typography className="important-text">[05/2021]</Typography>
            <Typography>graduated from Princeton University</Typography>
          </Stack>
        </Stack>
      </Stack>
    </section>
  );
}
