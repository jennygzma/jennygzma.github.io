import React from "react";
import { Stack, Typography } from "@mui/material";

export default function News() {
  return (
    <section id="news">
      <Stack spacing="30px" sx={{ width: "85%", margin: "auto" }}>
        <Typography variant="h4">news</Typography>
        <Stack spacing="10px" sx={{ margin: "auto" }}>
          <Stack direction="row" spacing="40px">
            <Typography className="important-text">[09/2023]</Typography>
            <Typography>
              started MS thesis track at Columbia University, working at the
              comuptational design lab. Advised by Professor Lydia Chilton with
              prospective graduation of May 2025
            </Typography>
          </Stack>
          <Stack direction="row" spacing="40px">
            <Typography className="important-text">[01/2023]</Typography>
            <Typography>
              joined series a devex startup called Trunk (ex Uber ATG) as a full
              stack engineer
            </Typography>
          </Stack>
          <Stack direction="row" spacing="40px">
            <Typography className="important-text">[08/2021]</Typography>
            <Typography>
              started job at DoorDash on alcohol product team as a backend SWE
            </Typography>
          </Stack>
          <Stack direction="row" spacing="40px">
            <Typography className="important-text">[05/2021]</Typography>
            <Typography>
              graduated from Princeton University with a BSE in operations
              research and financial engineering
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    </section>
  );
}
