import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const Header = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar sx={{height: 50, textAlign: "left", paddingLeft: '15px'}} position="sticky">
          <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
            StayCation
          </Typography>
      </AppBar>
    </Box>
  );
};

export default Header;
