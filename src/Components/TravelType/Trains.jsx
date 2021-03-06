import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";

const data = [
  {
    carrier_name: "GOA EXPRESS",
    date: "July 11",
    departurePlace: "New Delhi (NDLS)",
    departureTime: "3:15 PM",
    journey_time: "38 Hrs 25 mins",
    price: "₹2300",
    arrivalTime: "9:15 AM",
    arrivalPlace: "Vasco Da Gama (VSG)",
  },
  {
    carrier_name: "EXPRESS",
    date: "July 11",
    departurePlace: "New Delhi (NDLS)",
    departureTime: "3:15 PM",
    journey_time: "38 Hrs 25 mins",
    price: "₹2300",
    arrivalTime: "9:15 AM",
    arrivalPlace: "Vasco Da Gama (VSG)",
  },
  {
    carrier_name: "Delhi EXPRESS",
    date: "July 11",
    departurePlace: "New Delhi (NDLS)",
    departureTime: "3:15 PM",
    journey_time: "38 Hrs 25 mins",
    price: "₹2300",
    arrivalTime: "9:15 AM",
    arrivalPlace: "Vasco Da Gama (VSG)",
  },
];

const Trains = () => {
  return (
    <div>
      {data.map((data) => (
        <Box>
          <Card
            key={data.carrier_name}
            sx={{
              cursor: "pointer",
              minWidth: 275,
              marginBottom: "15px",
              marginTop: "15px",
            }}
          >
            <img
              style={{ width: "150px", height: "100px", paddingTop: "10px" }}
              src="https://play-lh.googleusercontent.com/_nVu27FHFwKVC29dt21p51tdkWZmONHwYVyzbDV45mGB_8szkEMcMlC1GpvLmlx1QN0"
              alt="logo"
            />
            <CardContent>
              <Typography
                sx={{ fontSize: 14 }}
                color="text.secondary"
                gutterBottom
              >
                {data.carrier_name}
              </Typography>
              <Typography variant="body2">{data.departurePlace}</Typography>
              <br />
              <div style={{ display: "flex", justifyContent: "space-evenly" }}>
                <Typography variant="body2">{data.departureTime}</Typography>
                <Typography variant="body2">{data.journey_time}</Typography>
                <Typography variant="body2">{data.arrivalTime}</Typography>
              </div>
              <Typography variant="body2">{data.price}</Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Book Now</Button>
            </CardActions>
          </Card>
        </Box>
      ))}
    </div>
  );
};

export default Trains;
