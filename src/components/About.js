import React from "react";
import { Stack, Button, Typography } from "@mui/material";

export default function About() {
  return (
    <section id="about">
      <Stack
        direction={{ sm: "column", md: "row" }}
        spacing={{ xs: 3, sm: 8 }}
        sx={{
          alignItems: "center",
          justifyContent: "center",
          width: "80%",
          marginLeft: "10%",
        }}
      >
        <Stack spacing={"10px"} sx={{ width: "40%", alignItems: "center" }}>
          <img
            className="mx-auto rounded w-2/3 object-scale-down"
            style={{ minWidth: "200px", maxWidth: "400px" }}
            alt="jm"
            src="./profile.png"
          />
          <Stack direction="row" spacing={"20px"}>
            <Button disableRipple href="mailto:jennygzma@gmail.com">
              <Typography className="link">email</Typography>
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
            {", "}
            <span className="important-text">human-computer interaction</span>
            {", "}
            and <span className="important-text">computer graphics</span>
            {". "}I am currently being advised by Professor{" "}
            <a
              href="https://www.cs.columbia.edu/~chilton/chilton.html"
              className="link"
            >
              Lydia Chilton
            </a>{" "}
            in the computational design lab. I am also a full stack software
            engineer at a series A devex startup called
            <a href="https://trunk.io/" className="link">
              {" "}
              Trunk
            </a>
            . I attended Princeton University for undergrad and majored in
            Operations Research and Financial Engineering.
            <br />
            <br />
            In my spare time, I enjoy watching One Piece, writing music,
            surfing, and hanging out with friends. I also try to run daily but
            don't really find that enjoyable 😬
          </Typography>
          <Typography variant="body1"></Typography>
        </Stack>
      </Stack>
    </section>
  );
}
