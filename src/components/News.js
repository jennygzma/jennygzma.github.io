import React from "react";
import { Stack, Typography } from "@mui/material";

export default function News() {
  return (
    <section id="news">
      <Stack spacing="20px">
        <Typography variant="h4">news</Typography>
        <Stack spacing="10px">
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
