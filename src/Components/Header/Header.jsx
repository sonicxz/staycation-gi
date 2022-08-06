import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import { auth, provider } from "../../Firebase";
import { useSelector } from "react-redux";
import SignInModal from "../Modals/Sign_Login";

const Header = () => {
  const user = useSelector((state) => state.user.currentUser);

  const signOut = () => {
    auth.signOut();
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
      {user ? (
        <Button sx={{ color: "white" }} onClick={signOut}>
          Sign Out
        </Button>
      ) : (
        <SignInModal />
      )}
    </Box>
  );
};

export default Header;
