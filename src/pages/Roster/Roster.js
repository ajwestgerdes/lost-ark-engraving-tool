import { motion } from "framer-motion"
import { Card, CardMedia, CardContent, Typography, CardActionArea } from "@mui/material";
import loaStriker from "../../assets/images/loaStriker.jpg"
import { useState } from "react";

function Roster() {
    const [isBig, setIsBig] = useState(false)

    return (
        <motion.div 
            layout
            animate={{
                height: isBig ? 1200 : 600,
                width: isBig ? 1200 : 600,
              }}
        >
            <Card>
                <CardActionArea onClick={() => setIsBig((isBig) => !isBig)}>
                    <CardMedia
                        component="img"
                        height="140"
                        image={loaStriker}
                        alt="striker"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Striker
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </motion.div>
        
    )
}
export default Roster;
