import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";

const Location = () => {
  return (
    <div>
      <Accordion
        style={{ margin: "100px", backgroundColor: "#6200EE", color: "white" }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Choose Travel Type</Typography>
        </AccordionSummary>
        <AccordionDetails
          style={{ display: "flex", justifyContent: "space-evenly" }}
        >
          <Box
            sx={{
              width: 400,
              height: 300,
              backgroundColor: "primary.dark",
              padding: "10px",
            }}
          >
            <Typography>GO AIR</Typography>
            <Typography style={{ marginBottom: "5px" }}>
              DEL New Delhi, India
            </Typography>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <Typography>15:10</Typography>
              <Typography>2h 30m</Typography>
              <Typography>17:40</Typography>
            </div>
            <Typography style={{ marginTop: "5px", textAlign: "right" }}>
              ₹ 6,5830
            </Typography>
            <Button style={{ backgroundColor: "gray", color: "black" }}>
              BOOK NOW
            </Button>
            <img src="https://www.flygofirst.com/images/go-first-logo.png" />
          </Box>
          <Box
            sx={{
              width: 600,
              height: 300,
              backgroundColor: "primary.dark",
              padding: "10px",
              alignItems: "center",
              justifyContent: "center",
              display: "flex",
            }}
          >
            <img
              style={{ width: "580px", height: "180px" }}
              src="https://assets.api.uizard.io/api/cdn/stream/deddbdeb-8b4b-42a2-b028-5a5ed1c659e3.png"
            />
          </Box>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default Location;
