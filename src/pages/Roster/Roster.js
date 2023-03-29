import { motion } from "framer-motion"
import { Card, CardMedia, CardContent, Typography, CardActionArea, CardHeader, Avatar, Grid } from "@mui/material";
import loaStriker from "../../assets/images/loaStriker.jpg"
import { useState } from "react";

function Roster() {
    const [isBig, setIsBig] = useState(false)

    return (
        <Grid>
        <motion.div 
            layout
            animate={{
                height: isBig ? 1200 : 600,
                width: isBig ? 1200 : 600,
              }}
        >
            <Card>
                <CardActionArea 
                    onClick={() => setIsBig((isBig) => !isBig)}
                >
                    <CardHeader
                        avatar={
                        <Avatar src={loaStriker}/>
                        }
                        title="Bigpumper7"
                        subheader="1520"
                    />
                </CardActionArea>
            </Card>
        </motion.div>
        </Grid>
        
    )
}
export default Roster;
