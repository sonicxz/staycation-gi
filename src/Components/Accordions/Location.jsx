import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Location = () => {
  return (
    <div>
      <Accordion style={{margin: '100px', backgroundColor: '#6200EE', color: 'white'}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Choose Destination</Typography>
        </AccordionSummary>
        <AccordionDetails>
            <input type='text' placeholder='Select Location' />
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default Location;