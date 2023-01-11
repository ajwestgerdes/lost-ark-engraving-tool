import { useState } from "react"
import { TextField, Typography, Grid, Select, InputLabel, MenuItem } from "@mui/material"

// Create fields to calculate max auction price
export const MaterialField = (props) => {
    const [value, setValue] = useState(0);

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
            <InputLabel id="demo-simple-select-label">Age</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    label="Age"
                    onChange={handleChange}
                >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                </Select>
            </Grid>
        </Grid>       
    )
}