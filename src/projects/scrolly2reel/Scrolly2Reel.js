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
                  <Typography variant="body1">
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
          <Typography variant="h4"> Motivation </Typography>
          <Typography variant="body1">
            Across all domains and industries, content retargeting is prevalent,
            especially with the rise of social media. In entertainment, books
            are made into movies, movies are made into trailers, and trailers
            are made into social media reels. In science and journalism,
            articles are retargeted for social media for young people with
            shorter attention spans in the form of reels and tweets. Content
            retargeting is interesting because the content is not being changed
            - it's audience is merely changing, and thus, the pace and alignment
            in which the content is being presented needs to be modified for
            it's new medium. It is therefore crucial to identify common
            structures that assist retargeting content across different mediums.
            We discuss the importance of narrative beats in retargeting content
            to maintain cohesion and retain alignment. We prove the importance
            of narrative beats by transforming journalism scrolly articles into
            social media reels. Scrolly articles came with the rise of digital
            journalism - articles with rich graphics that unfold as the user
            scrolls to help assist in the journalistic narrative (
            <Link href="https://www.nytimes.com/interactive/2020/08/10/nyregion/nyc-subway-coronavirus.html">
              example
            </Link>
            ). We want to repurpose these intricate graphics and animations for
            social media anad retarget the content successfully. We identify
            narrative beats in the original article, and use that as a basis for
            content retargeting. Without narrative beats, the retargeted content
            lacks alignment and becomes confusing; it is not suitable for the
            new medium.
          </Typography>
          <img
            className="mx-auto rounded w-2/3 object-scale-down"
            style={{ width: "100%" }}
            alt="teaser"
            src={require("./alignment.png")}
          />
          <Typography variant="h4"> Scrolly2Reel Overview </Typography>
          <Typography variant="body1">
            We provide a script that can be run in Google Chrome devtools that
            allow users to repurpose scrollies into reels by identifying the
            narrative beats within the scrolly and autoscrolling. The steps are
            outlined in the diagram below. The repository for the scripts and
            detailed instructions can also be found here:{" "}
            <Link href={"https://github.com/duynguyen158/Scrolly2Reel"}>
              https://github.com/duynguyen158/Scrolly2Reel
            </Link>
            .
          </Typography>
          <img
            className="mx-auto rounded w-2/3 object-scale-down"
            style={{ width: "50%" }}
            alt="teaser"
            src={require("./system.png")}
          />
          <Typography variant="h4"> Evaluation </Typography>
          <Typography variant="body1">
            We created four variants of videos for our evaluation (see below) to
            demonstrate the importance of shortening content for pacing and
            utilziing narrative beats for alignment in retargeting content.
            Modifying the content to be more fast-paced is imperative to
            maintain the shorter attention span of those on social media. For
            videos where alignment is necessary (where references in the script
            reference the animation), alignment between the audio and visuals is
            necessary. This is where narrative beats are crucial - without
            beats, visuals and audio can become misaligned and cause the
            retargeting to be unsuccessful. Our evaluation demonstrated the
            importance of beats in retargeting content. Retargeting content does
            not mean regenerating new content - it simply requires changing the
            pacing and retaining the alignment. Narrative beats act as a
            well-defined structure for modifying the content for new mediums to
            maintain alignment and creating natural groupings for pace changes.
            Furthermore, they can be used as a design structure in other forms
            of content retargeting.
          </Typography>
          <Box sx={{ backgroundColor: "white", padding: "20px" }}>
            <img
              className="mx-auto rounded w-2/3 object-scale-down"
              style={{ width: "100%" }}
              alt="beat alignment"
              src={require("./beat_alignment.png")}
            />
          </Box>
          <Box sx={{ backgroundColor: "white", padding: "20px" }}>
            <img
              className="mx-auto rounded w-2/3 object-scale-down"
              style={{ width: "100%" }}
              alt="evaluation"
              src={require("./evaluation.png")}
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
