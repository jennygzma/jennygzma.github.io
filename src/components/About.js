import React from "react";
import { Stack, Button, Typography } from "@mui/material";
import gmailIcon from "./assets/gmail.png";
import twitterIcon from "./assets/twitter.png";
import githubIcon from "./assets/github.png";
import linkedInIcon from "./assets/linkedin.png";
import googleScholarIcon from "./assets/google-scholar.png";
export default function About() {
  return (
    <section id="about">
      <Stack
        direction={{ sm: "column", md: "row" }}
        spacing={{ xs: 5, sm: 10 }}
        sx={{
          alignItems: "top",
          justifyContent: "center",
          width: "90%",
          marginLeft: "5%",
        }}
      >
        <Stack spacing={"10px"} sx={{ width: "40%", alignItems: "center" }}>
          <img
            className="mx-auto rounded w-2/3 object-scale-down"
            style={{ minWidth: "200px", maxWidth: "400px" }}
            alt="jm"
            src="./profile.png"
          />
          <Stack direction="row" paddingTop={"15px"}>
            <Button
              disableRipple
              href="mailto:jenny.ma@columbia.edu"
              sx={{ border: "none !important" }}
            >
              <img
                className="mx-auto rounded w-2/3 object-scale-down"
                width="30px"
                height="30px"
                alt="email"
                src={gmailIcon}
              />
            </Button>
            <Button
              disableRipple
              href="https://x.com/jenny_ma_"
              sx={{ border: "none !important" }}
            >
              <img
                className="mx-auto rounded w-2/3 object-scale-down"
                width="30px"
                height="30px"
                alt="twitter"
                src={twitterIcon}
              />
            </Button>
            <Button
              disableRipple
              href="https://github.com/jennygzma"
              sx={{ border: "none !important" }}
            >
              <img
                className="mx-auto rounded w-2/3 object-scale-down"
                width="30px"
                height="30px"
                alt="github"
                src={githubIcon}
              />
            </Button>
            <Button
              disableRipple
              href="https://www.linkedin.com/in/jennygzma/"
              sx={{ border: "none !important" }}
            >
              <img
                className="mx-auto rounded w-2/3 object-scale-down"
                width="30px"
                height="30px"
                alt="linkedin"
                src={linkedInIcon}
              />
            </Button>
            <Button
              disableRipple
              href="https://scholar.google.com/citations?hl=en&user=VphHku8AAAAJ&view_op=list_works&sortby=title"
              sx={{ border: "none !important" }}
            >
              <img
                className="mx-auto rounded w-2/3 object-scale-down"
                width="30px"
                height="30px"
                alt="google"
                src={googleScholarIcon}
              />
            </Button>
          </Stack>
        </Stack>
        <Stack spacing={"20px"}>
          <Typography variant="h4">about me</Typography>
          <Typography variant="body1">
            👋 I'm an incoming PhD student at Columbia University interested in the
            intersection of{" "}
            <span className="important-text">generative AI</span>
            {" and "}
            <span className="important-text">HCI</span>
            {". "} My primary focus is on designing human-centric interactive
            systems that{" "}
            <span className="important-text">
              empower productivity and creativity
            </span>
            . I'm advised by Professor{" "}
            <a
              href="https://www.cs.columbia.edu/~chilton/chilton.html"
              className="link"
            >
              Lydia Chilton
            </a>{" "}
            in the Computational Design Lab.
            <br />
            <br />
            Previously, I worked at a series A startup called
            <a href="https://trunk.io/" className="link">
              {" "}
              Trunk
            </a>{" "}
            (ex Uber-ATG) and DoorDash. I attended Princeton University for
            undergrad. I enjoy watching One Piece (each of my research papers
            carries the persona of a character 😉), driving, surfing, writing
            music, and hanging out with friends! I also try to run daily but
            don't find that enjoyable 😬
          </Typography>
          <Typography variant="body1"></Typography>
        </Stack>
      </Stack>
    </section>
  );
}
