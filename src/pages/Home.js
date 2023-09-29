import React from "react";
import backgroundImage from "../images/gamejot-bg.jpg";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

const Home = () => {
  const containerStyles = {
    position: "relative",
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  const contentStyles = {
    position: "relative",
    zIndex: 1,
    color: "white",
    textAlign: "center", // Center align the text
  };

  const headerStyles = {
    fontWeight: "bold", // Make the text bolder
    marginBottom: "20px", // Add some spacing between the headers
  };

  const backgroundStyles = {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    filter: "blur(12px)",
    zIndex: 0,
  };

  return (
    <div style={containerStyles}>
      <div style={contentStyles}>
        <Box sx={{ mt: 1 }}>
          <Typography
            sx={{
              textShadow:
                "4px 2px 4px rgba(0, 0, 0, 0.25), -2px -2px 4px rgba(0, 0, 0, 0.25)",
            }}
            variant="h3"
            color="inherit"
            noWrap
            style={headerStyles}
          >
            Track Games you've played
          </Typography>
          <Typography
            sx={{
              textShadow:
                "4px 2px 4px rgba(0, 0, 0, 0.25), -2px -2px 4px rgba(0, 0, 0, 0.25)",
            }}
            variant="h3"
            color="inherit"
            noWrap
            style={headerStyles}
          >
            Save those you want to play
          </Typography>
          <Typography
            sx={{
              textShadow:
                "4px 2px 4px rgba(0, 0, 0, 0.25), -2px -2px 4px rgba(0, 0, 0, 0.25)",
            }}
            variant="h3"
            color="inherit"
            noWrap
            style={headerStyles}
          >
            The Social Network for Gamers!
          </Typography>
          <Button
            sx={{
              mt: 3,
              mb: 2,
              bgcolor: "#9E6305",
              ":hover": {
                bgcolor: "#BD9066", // theme.palette.primary.main
                color: "white",
              },
            }}
            variant="contained"
            fullWidth
            href="/register"
          >
            Get Started - It's Free!
          </Button>
        </Box>
      </div>
      <div style={backgroundStyles}></div>
    </div>
  );
};

export default Home;
