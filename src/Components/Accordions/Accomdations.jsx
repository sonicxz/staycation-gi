import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box } from "@mui/material";

const Location = () => {
  return (
    <div>
      <Accordion style={{margin: '100px', backgroundColor: '#6200EE', color: 'white'}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Choose Accomdations</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Box
            sx={{
              width: '100%',
              height: 300,
              backgroundColor: "primary.dark",
              padding: "10px",
              alignItems: "center",
              justifyContent: "center",
              display: "flex",
            }}
          >
            <img
              style={{ width: "800px", height: "250px" }}
              src="https://assets.api.uizard.io/api/cdn/stream/a78a5f1b-a652-4a5d-9381-d702a53cd12c.png"
            />
          </Box>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default Location;