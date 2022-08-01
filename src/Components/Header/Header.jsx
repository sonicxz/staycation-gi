import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import { auth, createUserDocumentFromAuth, db, provider } from "../../Firebase";

const Header = () => {
  const handelAuth = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        createUserDocumentFromAuth(result.user);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <Box
      sx={{
        width: "100%",
        height: 60,
        backgroundColor: "primary.dark",
        display: "flex",
        padding: "20px",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Typography sx={{ fontSize: 30, color: "white", paddingRight: 10 }}>
        StayCation
      </Typography>
      <Button sx={{ color: "white" }} onClick={handelAuth}>
        Sign In/Log In
      </Button>
    </Box>
  );
};

export default Header;
