import React from "react";
import { Stack, Button, Typography } from "@mui/material";

export default function About() {
  return (
    <section id="about">
      <Stack
        direction="row"
        spacing="80px"
        sx={{
          width: "75%",
          justifyContent: "center",
          alignItems: "center",
          margin: "auto",
        }}
      >
        <Stack
          spacing={"10px"}
          sx={{ width: "40%", justifyContent: "center", alignItems: "center" }}
        >
          `
          <img
            className="mx-auto rounded w-2/3 object-scale-down"
            style={{ minWidth: "400px" }}
            alt="jm"
            src="./profile.png"
          />
          <Stack direction="row" spacing={"20px"}>
            <Button disableRipple href="mailto:jennygzma@gmail.com">
              <Typography className="link">[&nbsp;email&nbsp;]</Typography>
            </Button>
            <Button disableRipple href="https://github.com/jennygzma">
              <Typography className="link">[&nbsp;github&nbsp;]</Typography>
            </Button>
            <Button disableRipple href="https://www.linkedin.com/in/jennygzma/">
              <Typography className="link">[&nbsp;linkedin&nbsp;]</Typography>
            </Button>
          </Stack>
          `
        </Stack>
        <Stack spacing={"20px"}>
          <Typography variant="h4">about me</Typography>
          <Typography variant="body1">
            Hi! 👋 I'm a CS Masters student at Columbia University interested in
            the intersection of{" "}
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
            In my spare time, I enjoy writing music, surfing, and hanging out
            with friends. I also try to run daily but don't really find that
            enjoyable 😬
          </Typography>
          <Typography variant="body1"></Typography>
        </Stack>
      </Stack>
    </section>
  );
}
