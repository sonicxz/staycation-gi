import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { TextField } from "@mui/material";
import { auth, provider } from "../../Firebase";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  height: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  borderRadius: 3,
  p: 4,
};

const SignInModal = () => {
  const handelAuth = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button sx={{ color: "white" }} onClick={handleOpen}>
        Sign In/Sign Up
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <Typography sx={{ marginBottom: "15px" }}>Sign Up</Typography>
            <TextField sx={{ marginBottom: "20px" }} label="Email" />
            <TextField sx={{ marginBottom: "20px" }} label="Password" />
          </div>
          <Button onClick={handelAuth}>Continue with Google</Button>
        </Box>
      </Modal>
    </div>
  );
};

export default SignInModal;
