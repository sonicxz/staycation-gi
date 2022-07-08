import React, { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";

const Location = () => {
  const [location, setLocation] = useState("");
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
          <Typography>Choose Destination: {location}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <TextField
            sx={{
              color: "white",
              width: 500,
              maxWidth: "100%",
              marginBottom: '20px',
            }}
            id="standard-basic"
            label="Choose Destination"
            variant="standard"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />

          {location ? (
            <Box
              sx={{
                display: "flex",
                justifyContent: 'space-between',
                padding: '15px',
                width: 300,
                height: 130,
                backgroundColor: "primary.dark",
              }}
            >
              <Typography>Goa</Typography>
              <img style={{width: '150px', height: '100px'}} alt="logo" src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/33/fc/f0/goa.jpg?w=700&h=500&s=1" />
            </Box>
          ) : null}
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default Location;
