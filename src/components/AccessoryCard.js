import { useState } from "react"
import { Card, CardContent,TextField } from "@mui/material"

const min = 0
const max = 6

export const AccessoryCard = (props) => {
    return (
        <Card sx={{ maxWidth: '300px', margin: '10px', backgroundColor: '#2c2f33' }}>
            <CardContent>
                <EngravingField label="Engraving 1"/>
                <EngravingField label="Engraving 2"/>
                <EngravingField label="Negative Engraving"/>
            </CardContent>
        </Card>
    )   
}

const EngravingField = (props) => {
    const [value, setValue] = useState(0);

    return (
        <div style={{ flexFlow: 'row wrap', marginBottom: '10px' }}>
            <TextField sx={{ maxWidth: '200px' }}  id="outlined-basic" label={props.label} variant="outlined" />
            <TextField
                sx={{maxWidth: '60px', float: 'right'}}
                id="outlined-number"
                type="number"
                InputLabelProps={{
                    shrink: true,
                }}
                InputProps={{
                    inputProps: { 
                        min: min, max: max 
                    }
                }}
                value={value}
                onChange={(e) => {
                    // TODO: this needs to change, you can still just spam 0 in the input
                    var value = parseInt(e.target.value, 10);
                    if (value > max) value = max;
                    if (value < min) value = min;
                    setValue(value);
                }}
            />
        </div>
    )
}