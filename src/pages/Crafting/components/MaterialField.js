import { useState, useContext } from "react"
import { TextField, Typography, Grid } from "@mui/material"

export const MaterialField = (props) => {
    const [value, setValue] = useState(0);

    // console.log(props)

    return (
        <Grid
                container
                direction="row"
                justifyContent="space-between"
                alignItems="center"
            >
            <Grid item>
                <Typography variant="body1" gutterBottom>
                    {props.label}
                </Typography>
            </Grid>
            <Grid item>
                <TextField
                    sx={{marginLeft: 'auto'}}
                    id="outlined-number"
                    type="numberformat"
                    value={value}
                    onChange={(e) => {
                        setValue(e.target.value);
                        props.priceCalc(e.target.value)
                        
                    }}
                />
            </Grid>  
        </Grid>       
    )
}