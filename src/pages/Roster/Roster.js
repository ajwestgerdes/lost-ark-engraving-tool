import { motion } from "framer-motion"
import { Card, CardMedia, Box, CardContent, Typography, CardActionArea, CardHeader, Avatar, Grid } from "@mui/material";
import loaStriker from "../../assets/images/loaStriker.jpg"
import { useState } from "react";

export default function Roster() {
    const [isBig, setIsBig] = useState(false);
  
    const handleCardClick = () => {
      setIsBig(true);
    };
  
    const handleExpandedCardClick = () => {
      setIsBig(false);
    };
  
    return (
      <Grid container spacing={2}>
        <Card sx={{ maxWidth: 345 }}>
        <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Someusername"
        subheader="1520"
      />
      </Card>
      </Grid>
    );
  }