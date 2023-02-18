import { useState } from "react"
import { TextField, Typography, Grid, Select, InputLabel, MenuItem } from "@mui/material"

// Create fields to calculate max auction price
export default function MaterialField(props) {
    const [value, setValue] = useState(0);

    const handleChange = (x) => {
        console.log(x)
    }

    return (
        <Grid
                container
                direction="row"
                justifyContent="space-between"
                alignItems="center"
            >
            <Grid item>
                <Typography variant="body1" gutterBottom>
                    Split
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
                        props.priceCalc(e.target.value, props.ahStack, props.craftStack, props.matId)
                    }}
                />
            </Grid>
            <Grid item>
            <InputLabel id="demo-simple-select-label">Raid #</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={value}
                    label="Raid"
                    onChange={handleChange}
                >
                    <MenuItem value={4}>4</MenuItem>
                    <MenuItem value={8}>8</MenuItem>
                </Select>
            </Grid>
        </Grid>       
    )
}