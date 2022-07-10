import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const data = [
  {
    carrier_name: "SpiceJet",
    date: "11 July 2022",
    departurePlace: "New Delhi",
    departureTime: "20:25",
    journey_time: "4h",
    price: "₹2300",
    arrivalTime: "21:30",
    arrivalPlace: "Goa",
  },
  {
    carrier_name: "Go Air",
    date: "22 July 2022",
    departurePlace: "New Delhi",
    departureTime: "20:25",
    journey_time: "4h",
    price: "₹2300",
    arrivalTime: "21:30",
    arrivalPlace: "Goa",
  },
  {
    carrier_name: "Go Air",
    date: "22 July 2022",
    departurePlace: "New Delhi",
    departureTime: "20:25",
    journey_time: "4h",
    price: "₹2300",
    arrivalTime: "21:30",
    arrivalPlace: "Goa",
  },
];

const Flight = () => {
  return (
    <div>
      {data.map((data) => (
          <Card sx={{ minWidth: 275, marginBottom: '15px' }}>
            <CardContent>
              <Typography
                sx={{ fontSize: 14 }}
                color="text.secondary"
                gutterBottom
              >
                {data.carrier_name}
              </Typography>
              <Typography variant="body2">
                {data.departurePlace}
              </Typography>
              <br />
              <div style={{display: 'flex', justifyContent: 'space-evenly'}}>
                <Typography variant="body2">
                  {data.departureTime}
                </Typography>
                <Typography variant="body2">{data.journey_time}</Typography>
                <Typography variant="body2">{data.arrivalTime}</Typography>
              </div>
              <Typography variant="body2">{data.price}</Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Book Now</Button>
            </CardActions>
          </Card>
      ))}
    </div>
  );
};

export default Flight;
