import React, { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import TextField from "@mui/material/TextField";

const Location = () => {
  // const initialState = {
  //   chooseDestination: 0,
  //   chooseTravel: 0,
  //   chooseProperty: 0,
  //   chooseAccordian: 0,
  // };

  // const reducer = (initialState, action) => {
  //   switch (action.type) {
  //     case "destinationDone": {
  //       return { ...initialState, chooseDestination: 1 };
  //     }
  //     case "travelSelected": {
  //       return { ...initialState, chooseTravel: 1 };
  //     }
  //     case "propertySelected": {
  //       return { ...initialState, chooseProperty: 1 };
  //     }
  //   }
  // };
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
          <Typography>Choose Destination</Typography>
        </AccordionSummary>
        <AccordionDetails style={{backgroundColor: 'white', color: 'black'}}>
          <TextField
            sx={{
              color: "white",
              width: 500,
              maxWidth: "100%",
              marginBottom: "20px",
            }}
            id="standard-basic"
            label="Choose Destination"
            variant="standard"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default Location;
