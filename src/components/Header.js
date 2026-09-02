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
        justifyContent: "flex-start",
        alignItems: "flex-start",
        paddingTop: { xs: "40px", sm: "44px", md: "54px" },
        paddingBottom: { xs: "10px", md: 
          "20px" },
      }}
    >
      <Stack
        direction="row"
        sx={{ alignItems: "center", justifyContent: "flex-start" }}
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
