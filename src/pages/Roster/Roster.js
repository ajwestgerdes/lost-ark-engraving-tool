import { motion } from "framer-motion"
import { Card, CardMedia, CardContent, Typography, CardActionArea, Grid } from "@mui/material";
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
                <CardActionArea onClick={() => setIsBig((isBig) => !isBig)}>
                    <CardMedia
                        component="img"
                        height="100%"
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
                        height="100%"
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
                        height="100%"
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
                        height="100%"
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
                        height="100%"
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
        </Grid>
        
    )
}
export default Roster;
