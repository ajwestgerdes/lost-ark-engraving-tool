import { useState } from "react"
import { Card, CardContent, TextField, Autocomplete } from "@mui/material"
import { negativeEngravings, mainEngravings, classEngravings } from "../constants"

const min = 0
const max = 6

console.log(classEngravings)

export const AccessoryCard = (props) => {
    return (
        <Card sx={{ minWidth: '300px', margin: '10px', backgroundColor: '#2c2f33' }}>
            <CardContent>
                <EngravingField label="Engraving 1" engravings={mainEngravings}/>
                <EngravingField label="Engraving 2" engravings={mainEngravings}/>
                <EngravingField label="Negative Engraving" engravings={negativeEngravings}/>
            </CardContent>
        </Card>
    )   
}

const EngravingField = (props) => {
    const [value, setValue] = useState(0);

    return (
        <div style={{flexFlow: 'row nowrap', marginBottom: '10px' }}>
            <Autocomplete
                sx={{minWidth: '200px', float: 'left'}}
                disablePortal
                id="engraving-dropdown"
                options={props.engravings}
                renderInput={(params) => <TextField {...params} sx={{ marginBottom: '10px' }} label={props.label} />}
            />
            <TextField
                sx={{maxWidth: '60px', float: 'right', marginBottom: '10px'}}
                id="outlined-number"
                type="number"
                InputLabelProps={{
                    shrink: true,
                }}
                InputProps={{
                    inputProps: { 
                        min: min, 
                        max: max 
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