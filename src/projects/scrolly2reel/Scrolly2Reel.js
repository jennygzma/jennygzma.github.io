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
            Scrolly2Reel: Turning News Graphics into TikToks by Adjusting
            Narrative Beats and Pacing
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
                src={require("./bullet.mov")}
                title="Bullet"
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
                src={require("./covid.mov")}
                title="Covid"
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
                    Original Article: "What Happens To Viral Particles on the
                    Subway"
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
                src={require("./gymnast.mov")}
                title="Gymnast"
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
                    Original Article: "Sunisa Lee Is Unmatched on Uneven Bars
                    and Wants All-Around Glory"
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
            As media evolves, storytelling evolves. In 2012, newspapers
            introduced scrollytelling sequences, or "scrollies," to make news
            more immersive and interactive on the web. As users scroll through
            an article, graphics like animation, charts, and 3D visualizations
            appear to provide visual dynamics to the story. Today, news
            consumption is shifting to short-video platforms like TikTok,
            particularly among younger audiences. We propose repurposing the
            assets from scrollies and computationally transform them into
            videos. By shortening the original written text and precisely
            synchronizing the timing of audio narrative with features in the
            visual scrolling assets, we can create reels with dynamic pacing and
            narrative beats. We argue that text shortening is essential to
            producing fast paced videos that are compelling and visually
            interesting, and show that when beats are preserved in the output
            reel, topical alignment between them and the visual assets is
            crucial to the viewing experience. Understanding narrative pacing
            and beats in creative forms is key to user experience of media. They
            are an important primitive to effective editing, repurposing, and
            retargeting content while maintaining a cohesive narrative.
          </Typography>
          <img
            className="mx-auto rounded w-2/3 object-scale-down"
            style={{ width: "100%" }}
            alt="teaser"
            src={require("./teaser.png")}
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
