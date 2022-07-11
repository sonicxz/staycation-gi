import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const data = [
  {
    name: "Tata Tiago",
    transition: "Manual",
    variant: "Petrol",
    capacity: "5 seats",
    ratings: "4.5 (45)",
    usage: "20k kms driven",
    location: "2 kms from Goa Airport",
    price: "₹3500/day",
    range: "400 kms",
  },
  {
    name: "Maruti WagonR",
    transition: "Manual",
    variant: "Petrol",
    capacity: "5 seats",
    ratings: "4.2 (35)",
    usage: "9k kms driven",
    location: "1.2 kms from Goa Airport",
    price: "₹3000/day",
    range: "400 kms",
  },
  {
    name: "Toyota Glanza",
    transition: "Automatic",
    variant: "Petrol",
    capacity: "5 seats",
    ratings: "4.9 (135)",
    usage: "94k kms driven",
    location: "1.8 kms from Goa Airport",
    price: "₹4000/day",
    range: "400 kms",
  },
];

const Bike = () => {
  return (
    <div>
      {data.map((data) => (
        <Card
          sx={{
            cursor: 'pointer',
            minWidth: 275,
            marginBottom: "15px",
            marginRight: "10px",
            marginLeft: "10px",
            padding: "10px",
          }}
        >
          <CardContent>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              {data.name}
            </Typography>
            <Typography variant="body2">{data.usage}</Typography>
            <br />
            <div
              style={{
                display: "flex",
                justifyContent: "space-evenly",
                alignItems: "center",
                marginBottom: "5px",
              }}
            >
              <Typography variant="body2">{data.range}</Typography>
              <Typography variant="body2">{data.location}</Typography>
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

export default Bike;
