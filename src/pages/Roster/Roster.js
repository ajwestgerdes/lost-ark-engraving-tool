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
        <CardContent>
          <Box display="flex" alignItems="center">
            <Avatar src={loaStriker} />
            <Typography variant="h5" component="h2" sx={{ ml: 2 }}>
              Bigpumper7
            </Typography>
          </Box>
          <Box display="flex" alignItems="center" sx={{ mt: 2 }}>
            <Typography variant="h6" component="h3" sx={{ mr: 2 }}>
              Rating:
            </Typography>
            <Typography variant="h6" component="h3">
              1520
            </Typography>
          </Box>
        </CardContent>
      </Grid>
    );
  }