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
  maxWidth: "100%",
  height: "auto",
  aspectRatio: "1",
  cursor: "pointer",
  borderRadius: 0,
  [theme.breakpoints.down("sm")]: {
    maxWidth: 340,
  },
  [theme.breakpoints.between("sm", "md")]: {
    maxWidth: 420,
  },
  [theme.breakpoints.up("md")]: {
    maxWidth: 360,
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
        spacing={0}
        sx={{
          alignItems: { xs: "center", md: "flex-start" },
          justifyContent: { xs: "center", md: "flex-start" },
          width: { xs: "100%", sm: "95%", md: "98%" },
          margin: { xs: "0 auto", md: 0 },
          rowGap: { xs: 3, sm: 4, md: 0 },
          columnGap: { xs: 0, md: "36px" },
        }}
      >
        <Stack
          spacing={"10px"}
          sx={{
            width: { xs: "100%", sm: "85%", md: "360px" },
            maxWidth: { xs: "250px", md: "360px" },
            alignItems: { xs: "center", md: "flex-start" },
            pt: { xs: 0, sm: 0, md: "20px", lg: "20px", xl: "20px" },
            flexShrink: 0,
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
        <Stack
          spacing={"20px"}
          sx={{
            width: { xs: "100%", md: "auto" },
            maxWidth: { md: "760px" },
            flex: 1,
            minWidth: 0,
          }}
        >
          <Typography variant="h2">jenny ma</Typography>
          <Typography variant="body1">
            Hi!! I'm a CS PhD student at Columbia University. I'm interested in
            researching methods that {" "} give humans better agency over AI
            for creativity and productivity tools. I'm advised by Professor{" "}
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
             I have published papers in top-tier venues in HCI (CHI, UIST), with a Best Paper Honorable Mention award at CHI. I'm interested in pursuing more interdisciplinary research across AI, NLP, and Systems domains. Please reach out if you want to
            collaborate!
            <br />
            <br />
            Previously, interned at Adobe Research with{" "}
            <a href="https://hishin.github.io/" className="link">
              Valentina Shin
            </a>{" "}
            and{" "}
            <a href="https://karriekarahalios.com/" className="link">
              Karrie Karahalios
            </a> 
            on agentic video editing tools. Before my PhD, I worked at 
            <a href="https://trunk.io/" className="link">
              {" "}
              Trunk
            </a>{" "}
            (series A startup, ex Uber-ATG) and DoorDash as a SWE. I attended Princeton University for
            undergrad and majored in Operations Research and Financial Engineering.
            <br />
            <br />
            I enjoy watching One Piece (
            <a href="#/one-piece" className="link">
              each of my research papers carries the persona of a character
            </a>{" "}
            😉), painting, crafting, surfing, and writing music! I also run but I don't know if I find that
            enjoyable 😬
            <br /> <br />
            {/* Check out{" "}
            <a href="https://jennymayes.substack.com/" className="link">
              my substack
            </a>{" "}
            also! It's mostly personal but I might put some research stuff on
            there 😊. */}
          </Typography>
        </Stack>
      </Stack>
    </section>
  );
}
