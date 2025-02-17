import React from "react";
import { Stack, Button, Typography } from "@mui/material";

export default function About() {
  return (
    <section id="about">
      <Stack
        direction={{ sm: "column", md: "row" }}
        spacing={{ xs: 5, sm: 10 }}
        sx={{
          alignItems: "center",
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
          <Stack direction="row" spacing={"20px"} paddingTop={"15px"}>
            <Button disableRipple href="mailto:jenny.ma@columbia.edu">
              <Typography className="link">email</Typography>
            </Button>
            <Button disableRipple href="https://x.com/jenny_ma_">
              <Typography className="link">twitter</Typography>
            </Button>
            <Button disableRipple href="https://github.com/jennygzma">
              <Typography className="link">github</Typography>
            </Button>
            <Button disableRipple href="https://www.linkedin.com/in/jennygzma/">
              <Typography className="link">linkedin</Typography>
            </Button>
          </Stack>
        </Stack>
        <Stack spacing={"20px"}>
          <Typography variant="h4">about me</Typography>
          <Typography variant="body1">
            Hi! 👋 I'm a CS MS student at Columbia University interested in the
            intersection of{" "}
            <span className="important-text">generative AI</span>
            {" and "}
            <span className="important-text">human-computer interaction</span>
            {". "} My primary focus is on designing human-centric interactive
            systems that{" "}
            <span className="important-text">
              empower productivity and creativity
            </span>
            . I am currently advised by Professor{" "}
            <a
              href="https://www.cs.columbia.edu/~chilton/chilton.html"
              className="link"
            >
              Lydia Chilton
            </a>{" "}
            in the Computational Design Lab and plan to start my PhD next fall.
            <br />
            <br />
            Previously, I worked at a series A devex startup called
            <a href="https://trunk.io/" className="link">
              {" "}
              Trunk
            </a>{" "}
            (ex Uber-ATG) and DoorDash. I attended Princeton University for
            undergrad. I enjoy watching One Piece, driving, surfing, writing
            music, and hanging out with friends! I also try to run daily but
            don't find that enjoyable 😬
          </Typography>
          <Typography variant="body1"></Typography>
        </Stack>
      </Stack>
    </section>
  );
}
