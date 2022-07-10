import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Flight from "../TravelType/Flights";
import Trains from "../TravelType/Trains";
import Buses from "../TravelType/Buses";
import FlightIcon from "@mui/icons-material/Flight";
import DirectionsBusIcon from "@mui/icons-material/DirectionsBus";
import TrainIcon from "@mui/icons-material/Train";

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
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            backgroundColor: "white",
            color: 'black',
          }}
        >
          <div style={{ textAlign: "center" }}>
            <FlightIcon />
            <Flight />
          </div>
          <div style={{ textAlign: "center" }}>
            <TrainIcon />
            <Trains />
          </div>
          <div style={{ textAlign: "center" }}>
            <DirectionsBusIcon />
            <Buses />
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default Location;
