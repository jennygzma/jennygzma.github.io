import React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function Header() {
  return (
    <Stack
      direction={{ sm: "column", md: "row" }}
      spacing={"50"}
      sx={{
        justifyContent: "space-between",
        paddingTop: "100px",
        paddingBottom: "30px",
      }}
    >
      <Button
        disableRipple
        href="#/"
        sx={{
          border: "transparent !important",
          backgroundColor: "transparent !important",
          height: "auto",
          "&:hover": { backgroundColor: "transparent !important" },
        }}
      >
        <Typography variant="h2">jenny ma</Typography>
      </Button>
      <Stack
        direction="row"
        sx={{ alignItems: "center", justifyContent: "flex-end" }}
      >
        <Button
          href="#/experiences"
          sx={{
            border: "transparent !important",
            "&:hover": { backgroundColor: "transparent !important" },
          }}
        >
          <Typography variant="h5">industry experience</Typography>
        </Button>

        <Button
          href="https://drive.google.com/file/d/1wqMrd0zA1TaOF7sBsSs72lnsSWbpN6Ax/view?usp=sharing"
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
