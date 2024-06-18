import React from "react";
import { Stack, Button, Typography } from "@mui/material";
import { CardMedia, Card, Box, Link } from "@mui/material";
import "./scrolly2reel.css";

export default function Scrolly2Reel() {
  return (
    <section className="scrolly2reel">
      <Stack
        spacing={{ xs: 5, sm: 10 }}
        sx={{
          alignItems: "center",
          justifyContent: "center",
          background: "#D9D9D9 !important",
          height: "100%",
          padding: "10px",
          paddingBottom: "50px",
        }}
      >
        <Stack direction="row" spacing="10px" sx={{ alignSelf: "flex-start" }}>
          <Button disableRipple href="/">
            <Typography className="link">back</Typography>
          </Button>
          <Button
            disableRipple
            href="/https://arxiv.org/abs/2403.18111"
            sx={{ alignSelf: "flex-start" }}
          >
            <Typography className="link">arxiv</Typography>
          </Button>
          <Button
            disableRipple
            href="/https://github.com/duynguyen158/Scrolly2Reel"
            sx={{ alignSelf: "flex-start" }}
          >
            <Typography className="link">github </Typography>
          </Button>
        </Stack>
        <Stack
          spacing="30px"
          sx={{
            width: "70%",
            alignItems: "center",
            justifyContent: "center",
            height: "100%",
          }}
        >
          <Typography variant="h3" textAlign="center">
            Scrolly2Reel: Scrolly2Reel: Retargeting Graphics for Social Media
            Using Narrative Beats
          </Typography>
          <Typography variant="h6">
            Duy Nguyen*, Jenny Ma*, Pedro Alejandro Perez, Lydia B. Chilton
          </Typography>
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing="20px"
            height="50%"
            width="85%"
            padding="20px"
            backgroundColor="#474e4a"
          >
            <Card>
              <CardMedia
                component="video"
                controls
                src={require("./nyt_ammunition.mp4")}
                title="Ammunition"
                sx={{ height: "85%" }}
              />
              <Box
                sx={{
                  backgroundColor: "#D9D9D9 !important",
                  padding: "10px",
                  textAlign: "center",
                  height: "25%",
                }}
              >
                <Box sx={{ border: "2px solid #474e4a", padding: "10px" }}>
                  <Typography variant="body1">
                    Original Article: "Army Ammunition Plant Is Tied to Mass
                    Shootings Across the US"
                  </Typography>
                </Box>
                {/* <Button height="auto" width="auto" href="https://www.nytimes.com/2023/11/11/us/army-ammunition-factory-shootings.html">
                  <Typography>
                  Original Article: "Army Ammunition Plant Is Tied to Mass Shootings Across the US"

                  </Typography>
                </Button> */}
              </Box>
            </Card>
            <Card sx={{ backgroundColor: "#D9D9D9 !important" }}>
              <CardMedia
                component="video"
                controls
                src={require("./nyt_life_after_climate.mp4")}
                title="Life After Climate"
                sx={{ height: "85%" }}
              />
              <Box sx={{ padding: "10px", textAlign: "center" }}>
                <Box
                  sx={{
                    border: "2px solid #474e4a",
                    padding: "10px",
                    alignSelf: "center",
                  }}
                >
                  <Typography variant="body1">
                    Original Article: "The New World Envisioning Life After
                    Climate Change"
                  </Typography>
                </Box>
                {/* <Button height="auto" width="auto" href="https://www.nytimes.com/interactive/2020/08/10/nyregion/nyc-subway-coronavirus.html">
                  <Typography>
                  Original Article: "Army Ammunition Plant Is Tied to Mass Shootings Across the US"

                  </Typography>
                </Button> */}
              </Box>
            </Card>
            <Card>
              <CardMedia
                component="video"
                controls
                src={require("./ole.mov")}
                title="Stadium Sounds"
                sx={{ height: "85%" }}
              />
              <Box
                sx={{
                  backgroundColor: "#D9D9D9 !important",
                  padding: "10px",
                  textAlign: "center",
                }}
              >
                <Box sx={{ border: "2px solid #474e4a", padding: "10px" }}>
                  <Typography variant="body1">
                    Original Article: "Sounds of the Stadium: The Anatomy of a
                    World Cup Chant"
                  </Typography>
                </Box>
                {/* <Button height="auto" width="auto" href="https://www.nytimes.com/interactive/2021/sports/olympics/suni-lee-gymnastics.html ">
                  <Typography>
                  Original Article: "Army Ammunition Plant Is Tied to Mass Shootings Across the US"

                  </Typography>
                </Button> */}
              </Box>
            </Card>
          </Stack>
          <Typography variant="h4"> Abstract </Typography>
          <Typography variant="body1">
            Content retargeting is crucial for social media creators. Once great
            content is created, it is important to reach as broad an audience as
            possible. This is particularly important in journalism where younger
            audiences are shifting away from print and towards short-video
            platforms. Many newspapers already create rich graphics for the web
            that they want to be able to reuse for social media. One example is
            scrollytelling sequences or "scrollies" -- immersive articles with
            graphics like animation, charts, and 3D visualizations that appear
            as a user scrolls. We present a system that helps transform
            scrollies into social media videos. By using the scriptwriting
            concept of narrative beats to extract fundamental storytelling
            units, we can create videos that are more aligned with narration,
            and allow for better pacing and stylistic changes. Narrative beats
            are thus an important primitive to retargeting content that matches
            the style of a new medium while maintaining the cohesiveness of the
            original content.
          </Typography>
          <img
            className="mx-auto rounded w-2/3 object-scale-down"
            style={{ width: "100%" }}
            alt="teaser"
            src={require("./alignment.png")}
          />
          <img
            className="mx-auto rounded w-2/3 object-scale-down"
            style={{ width: "50%" }}
            alt="teaser"
            src={require("./system.png")}
          />
          <Box sx={{ backgroundColor: "white", padding: "20px" }}>
            <img
              className="mx-auto rounded w-2/3 object-scale-down"
              style={{ width: "100%" }}
              alt="beat alignment"
              src={require("./beat_alignment.png")}
            />
          </Box>
          <Typography variant="h4"> Citation </Typography>
          <Box
            sx={{
              width: "100%",
              backgroundColor: "white !important",
              padding: "20px",
            }}
          >
            <code>
              @misc{"{"}nguyen2024scrolly2reel,
              <br />
              &nbsp;&nbsp;title={"{"}Scrolly2Reel: Turning News Graphics into
              TikToks by Adjusting Narrative Beats and Pacing{"}"}, <br />
              &nbsp;&nbsp;author={"{"}Duy K. Nguyen and Jenny Ma and Pedro
              Alejandro Perez and Lydia B. Chilton{"}"},<br />
              &nbsp;&nbsp;year={"{"}2024{"}"},<br />
              &nbsp;&nbsp;eprint={"{"}2403.18111{"}"},<br />
              &nbsp;&nbsp;archivePrefix={"{"}arXiv{"}"},<br />
              &nbsp;&nbsp;primaryClass={"{"}cs.HC{"}"}
              <br />
              {"}"}
            </code>
          </Box>
        </Stack>
      </Stack>
    </section>
  );
}
