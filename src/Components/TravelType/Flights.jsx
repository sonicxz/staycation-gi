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
    departurePlace: "DEL New Delhi, India",
    departureTime: "20:25",
    journey_time: "4h",
    price: "₹2300",
    arrivalTime: "21:30",
    arrivalPlace: "Goa",
  },
  {
    carrier_name: "Go Air",
    date: "22 July 2022",
    departurePlace: "DEL New Delhi, India",
    departureTime: "20:25",
    journey_time: "4h",
    price: "₹2300",
    arrivalTime: "21:30",
    arrivalPlace: "Goa",
  },
  {
    carrier_name: "Indigo",
    date: "22 July 2022",
    departurePlace: "DEL New Delhi, India",
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
        <Card key={data.carrier_name} sx={{ cursor: "pointer", minWidth: 275, marginBottom: "15px", marginTop: "15px" }}>
          <CardContent>
            <img style={{width: '150px', height: '100px'}} src="https://m.economictimes.com/thumb/msid-80049437,width-1200,height-900,resizemode-4,imgsize-38409/goair-agencies.jpg" alt="logo" />
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
      ))}
    </div>
  );
};

export default Flight;
