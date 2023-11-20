import React from "react";
import Stack from "@mui/material/Stack";
import Link from "@mui/material/Button";
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
      <Link disableRipple href="#/" sx={{ width: "auto" }}>
        <Typography variant="h2">jenny ma</Typography>
      </Link>
      <Stack direction="row">
        <Link href="#/experiences" sx={{ width: "auto" }}>
          <Typography variant="h5">industry experience</Typography>
        </Link>

        <Link href="/cv.pdf" sx={{ width: "auto" }}>
          <Typography variant="h5">cv</Typography>
        </Link>
      </Stack>
    </Stack>
  );
}
