import { useState } from "react"
import { TextField, Typography, Grid } from "@mui/material"
import { CraftingContext } from "../../../util/Context";


export const MaterialField = (props) => {
    const [value, setValue] = useState(0);
    const ctx = useContext(CraftingContext)
    
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
                    }}
                />
            </Grid>  
        </Grid>       
    )
}