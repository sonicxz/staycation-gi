import React, { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import TextField from "@mui/material/TextField";
import { Card } from "@mui/material";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";

const data = [
  {
    name: "Goa",
  },
  {
    name: "North Goa",
  },
  {
    name: "South Goa",
  },
];

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
        <AccordionDetails style={{ backgroundColor: "white", color: "black" }}>
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

          {location ? (
            <div style={{display: 'flex', justifyContent: 'space-evenly'}}>
              {data.map((data) => (
                <Card
                key={data.name}
                sx={{
                  textAlign: 'center',
                  minWidth: 275,
                  cursor: "pointer",
                  marginBottom: "15px",
                  marginTop: "15px",
                }}
              >
                <CardContent>
                  <img
                    style={{ width: "150px", height: "100px" }}
                    src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/33/fc/f0/goa.jpg?w=700&h=500&s=1"
                    alt="logo"
                  />
                  <Typography
                    sx={{ fontSize: 14 }}
                    color="text.secondary"
                    gutterBottom
                  ></Typography>
                  <Typography variant="h4">{data.name}</Typography>
                  <br />
                </CardContent>
                <CardActions>
                  <Button size="small">More Details</Button>
                </CardActions>
              </Card>
              ))}
            </div>
          ) : null}
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default Location;
