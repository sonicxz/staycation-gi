import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box } from "@mui/system";

const Location = () => {
  return (
    <div>
      <Box sx={{ width: "100%", height: "100%" }}>
        <Accordion
          style={{
            margin: "100px",
            color: "white",
            backgroundColor: "#6200EE"
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>Choose Accomdations</Typography>
          </AccordionSummary>
          <AccordionDetails style={{backgroundColor: 'white', color: 'black'}}></AccordionDetails>
        </Accordion>
      </Box>
    </div>
  );
};

export default Location;
