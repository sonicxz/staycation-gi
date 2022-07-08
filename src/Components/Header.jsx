import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
// import PersonIcon from '@mui/icons-material/Person';

const Header = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar sx={{ height: 45 }} position="sticky">
          <Typography style={{fontSize: '18px', padding: '15px', fontWeight: 'bold', textAlign: 'center'}} variant="h4" component="div" sx={{ flexGrow: 1 }}>
            StayCation
          </Typography>
      </AppBar>
    </Box>
  );
};

export default Header;
