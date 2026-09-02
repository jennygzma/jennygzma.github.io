import React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function Header() {
  return (
    <Stack
      direction={{ xs: "column", sm: "column", md: "row" }}
      spacing={{ xs: 2, sm: 3, md: 5 }}
      sx={{
        justifyContent: "flex-end",
        alignItems: { xs: "center", md: "flex-start" },
        paddingTop: { xs: "24px", sm: "28px", md: "36px" },
        paddingBottom: { xs: "0px", md: "0px" },
      }}
    >
      <Stack
        direction="row"
        sx={{ alignItems: "center", justifyContent: "flex-end" }}
      >
        {/* <Button
          href="#/experiences"
          sx={{
            border: "transparent !important",
            "&:hover": { backgroundColor: "transparent !important" },
          }}
        >
          <Typography variant="h5">experience</Typography>
        </Button> */}

        <Button
          href="#/blog"
          sx={{
            border: "transparent !important",
            "&:hover": { backgroundColor: "transparent !important" },
          }}
        >
          <Typography variant="h5">blog</Typography>
        </Button>
        <Button
          href="#/one-piece"
          sx={{
            border: "transparent !important",
            "&:hover": { backgroundColor: "transparent !important" },
          }}
        >
          <Typography variant="h5">research gallery</Typography>
        </Button>
        <Button
          href="https://drive.google.com/file/d/1hmu17qK9gvekiQ5xpqWj6KgZ2tWlxIEG/view?usp=sharing"
          sx={{
            border: "transparent !important",
            "&:hover": { backgroundColor: "transparent !important" },
          }}
        >
          <Typography variant="h5">cv</Typography>
        </Button>
      </Stack>
    </Stack>
  );
}
