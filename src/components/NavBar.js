import React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function Navbar() {
  return (
    <Stack
      direction="row"
      sx={{
        alignItems: "center",
        justifyContent: "space-between",
        paddingX: "100px",
        paddingTop: "100px",
        paddingBottom: "30px",
      }}
    >
      <Button href="/" sx={{ width: "auto" }}>
        <Typography variant="h2">jenny ma</Typography>
      </Button>
      <Stack direction="row">
        <Button href="/experiences" sx={{ width: "auto" }}>
          <Typography variant="h5">swe experience</Typography>
        </Button>
        <Button href="/cv.pdf" sx={{ width: "auto" }}>
          <Typography variant="h5">cv</Typography>
        </Button>
      </Stack>
    </Stack>
  );
}
