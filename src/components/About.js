import React, { useState } from "react";
import { styled } from "@mui/system";
import { Stack, Button, Typography, Box } from "@mui/material";
import gmailIcon from "./assets/gmail.png";
import twitterIcon from "./assets/twitter.png";
import githubIcon from "./assets/github.png";
import linkedInIcon from "./assets/linkedin.png";
import googleScholarIcon from "./assets/google-scholar.png";

const FlipCard = styled(Box)(({ theme }) => ({
  perspective: "1000px",
  width: "100%",
  maxWidth: { xs: 280, sm: 320, md: 400 },
  height: "auto",
  aspectRatio: "1",
  cursor: "pointer",
  borderRadius: 0,
  [theme.breakpoints.down("sm")]: {
    maxWidth: 280,
  },
  [theme.breakpoints.between("sm", "md")]: {
    maxWidth: 320,
  },
  [theme.breakpoints.up("md")]: {
    maxWidth: 400,
  },
}));

const FlipCardInner = styled(Box)(({ flipped }) => ({
  position: "relative",
  width: "100%",
  height: "100%",
  textAlign: "center",
  transition: "transform 0.8s",
  transformStyle: "preserve-3d",
  transform: flipped ? "rotateY(180deg)" : "none",
}));

const FlipCardFace = styled(Box)({
  position: "absolute",
  width: "100%",
  height: "100%",
  backfaceVisibility: "hidden",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const FlipCardBack = styled(FlipCardFace)({
  transform: "rotateY(180deg)",
});

export default function About() {
  const [flipped, setFlipped] = useState(false);
  return (
    <section id="about">
      <Stack
        direction={{ xs: "column", md: "row" }}
        spacing={{ xs: 3, sm: 5, md: 10 }}
        sx={{
          alignItems: { xs: "center", md: "flex-start" },
          justifyContent: "center",
          width: { xs: "100%", sm: "95%", md: "90%" },
          marginLeft: { xs: "0%", sm: "2.5%", md: "5%" },
        }}
      >
        <Stack
          spacing={"10px"}
          sx={{
            width: { xs: "100%", sm: "80%", md: "40%" },
            maxWidth: { xs: "320px", md: "none" },
            alignItems: "center",
          }}
        >
          <FlipCard onClick={() => setFlipped(!flipped)}>
            <FlipCardInner flipped={flipped}>
              <FlipCardFace>
                <img
                  src="./profile.jpg"
                  alt="Front"
                  style={{ width: "100%", borderRadius: 12 }}
                />
              </FlipCardFace>
              <FlipCardBack>
                <img
                  src="./profile.png"
                  alt="Back"
                  style={{ width: "100%", borderRadius: 12 }}
                />
              </FlipCardBack>
            </FlipCardInner>
          </FlipCard>
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
            Hi!! I'm a CS PhD student at Columbia University. I'm interested in
            researching methods that {" "}
            <span className="important-text">
              give humans better control of AI
            </span> {" "} and {" "}
            <span className="important-text">
               make agents behave
            </span>
            . I'm advised by Professor{" "}
            <a
              href="https://www.cs.columbia.edu/~chilton/chilton.html"
              className="link"
            >
              Lydia Chilton
            </a>{" "} in the{" "}
            <a
              href="https://daplab.cs.columbia.edu/"
              className="link"
            >
              DAPLab.
            </a>{" "}
            {/* and work closely with Professor{" "}
            <a
              href="https://www.cs.columbia.edu/~ewu/"
              className="link"
            >
              Eugene Wu.
            </a>{" "} */}
             Please reach out if you want to
            collaborate!
            <br />
            <br />
            Previously, I worked at 
            <a href="https://trunk.io/" className="link">
              {" "}
              Trunk
            </a>{" "}
            (series A startup, ex Uber-ATG) and DoorDash. I attended Princeton University for
            undergrad. I enjoy watching One Piece (each of my research papers
            carries the persona of a character 😉), surfing, and writing music! I also run but I don't know if I find that
            enjoyable 😬
            <br /> <br />
            Check out{" "}
            <a href="https://jennymayes.substack.com/" className="link">
              my substack
            </a>{" "}
            also! It's mostly personal but I might put some research stuff on
            there 😊.
          </Typography>
        </Stack>
      </Stack>
    </section>
  );
}
