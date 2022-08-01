import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const data = [
  {
    name: "Calvin's",
    address: "Benaulim",
    ratings: 4.5,
    text1: "Entire Apartment",
    text2: "2 bedrooms | 3 beds | Caretaker",
    text3: "Super Fast Internet Available",
    text4: "Best for group travel",
    sell_price: "₹2300",
    taxes: 320,
  },
  {
    name: "Calvin's Retreat",
    address: "Benaulim",
    ratings: 4.5,
    text1: "Entire Apartment",
    text2: "2 bedrooms | 3 beds | Caretaker",
    text3: "Super Fast Internet Available",
    text4: "Best for group travel",
    sell_price: "₹2300",
    taxes: 320,
  },
  {
    name: "Calvin's Retreats",
    address: "Benaulim",
    ratings: 4.5,
    text1: "Entire Apartment",
    text2: "2 bedrooms | 3 beds | Caretaker",
    text3: "Super Fast Internet Available",
    text4: "Best for group travel",
    sell_price: "₹2300",
    taxes: 320,
  },
];

const Hotels = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        padding: "20px",
      }}
    >
      {data.map((data) => (
        <Card
        key={data.name}
          sx={{
            cursor: "pointer",
            minWidth: 275,
            marginBottom: "15px",
            marginRight: "10px",
            marginLeft: "10px",
            padding: "10px",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <CardContent>
            <img
              style={{ width: "200px", height: "100px" }}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeY_zJi4QwvhKjskhzyFqucAwE78IX6tudg_eJZBKfg-mIWdbAhSoas5On_kdf0xD3Hg&usqp=CAU"
              alt="logo"
            />
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              {data.name}
            </Typography>
            <Typography variant="body2">{data.address}</Typography>
            <br />
            <div
              style={{
                display: "flex",
                justifyContent: "space-evenly",
                alignItems: "center",
                marginBottom: "5px",
              }}
            >
              <ul>
                <li>{data.text2}</li>
                <li>{data.text3}</li>
              </ul>
            </div>
            <Typography variant="body2">{data.sell_price}</Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Book Now</Button>
          </CardActions>
        </Card>
      ))}
    </div>
  );
};

export default Hotels;
