import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";

export default function Footer() {
  return (
    <Box
      sx={{
        p: 4,
        marginTop: "auto",
        bottom: 0,
        position: "relative",
      }}
      component="footer"
    >
      <Container maxWidth="sm">
        <Typography variant="body2" color="text.secondary" align="center">
          {"Copyright © "}
          <Link color="inherit" href="/">
            Gamejot
          </Link>{" "}
          {new Date().getFullYear()}
          {"."}
        </Typography>
        <Typography variant="body2" color="text.secondary" align="center">
          {"Data and images provided by "}
          <Link color="inherit" href="https://rawg.io/">
            RAWG
          </Link>{" "}
        </Typography>
      </Container>
    </Box>
  );
}
