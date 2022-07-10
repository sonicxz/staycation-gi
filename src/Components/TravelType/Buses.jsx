import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Paper } from "@mui/material";
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

const Buses = () => {
  return (
    <Paper elevation={3}>
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <ErrorOutlineIcon />
        <Typography variant="body2">No Rides Avalable</Typography>
      </CardContent>
    </Card>
    </Paper>
  );
};

export default Buses;
