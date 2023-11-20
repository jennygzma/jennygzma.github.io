import React from "react";
import { Stack, Typography, List, ListItem, ListItemIcon } from "@mui/material";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

export default function Experiences() {
  return (
    <section id="industry experience">
      <Stack spacing="30px" sx={{ width: "85%", margin: "auto" }}>
        <Typography variant="h4">industry experience</Typography>
        <Stack spacing="20px">
          <Stack direction="row" spacing="40px" id="trunk">
            <Stack sx={{ width: "200px" }}>
              <Typography variant="h6">trunk</Typography>
              <Typography>
                nyc 🗽,
                <span style={{ fontStyle: "italic" }}> 01/23-present </span>
              </Typography>
              <Stack sx={{ paddingTop: "15px" }}>
                <Typography className="important-text">skills</Typography>
                <Typography>typescript, react, nextjs, octokit</Typography>
              </Stack>
            </Stack>
            <List>
              <ListItem>
                <ListItemIcon>
                  <FiberManualRecordIcon fontSize="small" />
                </ListItemIcon>
                <Typography variant="body1">
                  {" "}
                  Enabled trunk check on github PR workflows using github API.
                </Typography>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <FiberManualRecordIcon fontSize="small" />
                </ListItemIcon>
                <Typography variant="body1">
                  Created an onboarding wizard to help users seamlessly onboard
                  onto Check product in the web-app (
                  <a href="app.trunk.io" className="link">
                    app.trunk.io
                  </a>
                  ).
                </Typography>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <FiberManualRecordIcon fontSize="small" />
                </ListItemIcon>
                <Typography variant="body1">
                  Migrated web-app from react-router to NextJS
                </Typography>
              </ListItem>
            </List>
          </Stack>
          <Stack direction="row" spacing="40px" id="doordash">
            <Stack sx={{ minWidth: "200px" }}>
              <Typography variant="h6">doordash</Typography>
              <Typography>
                nyc 🗽,
                <span style={{ fontStyle: "italic" }}> 08/21-12/22 </span>
              </Typography>
              <Stack sx={{ paddingTop: "15px" }}>
                <Typography className="important-text">skills</Typography>
                <Typography>kotlin, kubernetes, gRPC, github</Typography>
              </Stack>
            </Stack>
            <List>
              <ListItem>
                <ListItemIcon>
                  <FiberManualRecordIcon fontSize="small" />
                </ListItemIcon>
                <Typography variant="body1">
                  Integrate HSA/FSA items to Doordash, leading design and
                  implementation for reimbursable receipts to unlock $41M in
                  revenue. Identified key bugs in adjustment flow that were
                  missing, investigating and fixing the root cause to allow
                  HSA/FSA to launch in time.
                </Typography>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <FiberManualRecordIcon fontSize="small" />
                </ListItemIcon>
                <Typography variant="body1">
                  Fixed alcohol dropoff preference bug that had weekly loss of
                  $30k. Investigated different behaviors and multiple sources of
                  truth in reading dropoff preferences, charting a path forward
                  to consolidate the SOT over the course of 3 months. Lead
                  meetings and worked across 5+ core teams and microservices.
                  Designed and implemented our restructured dropoff preferences
                  flow architecture for all DoorDash consumers, laying the
                  groundwork for more reliable and consistent address data and
                  foundation for the engineering team to build upon in the
                  future.
                </Typography>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <FiberManualRecordIcon fontSize="small" />
                </ListItemIcon>
                <Typography variant="body1">
                  Implemented Dasher-scanned ID-verification, where Dasher acts
                  as a bouncer to scan consumer ids. Lowered failed alcohol
                  deliveries by 40% and increased internal sting rate by 49%,
                  setting a new industry standard for id verification.
                </Typography>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <FiberManualRecordIcon fontSize="small" />
                </ListItemIcon>
                <Typography variant="body1">
                  Added support for flexible item hours, allowing merchants to
                  sell alcohol at varying hours, increasing volume by more than
                  3%.
                </Typography>
              </ListItem>
            </List>
          </Stack>
        </Stack>
      </Stack>
    </section>
  );
}
