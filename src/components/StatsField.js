import { useState, useContext, useEffect } from "react"
import { TextField, Autocomplete } from "@mui/material"
import { AccessoryContext } from "../util/Context";

export const StatsField = (props) => {
    const [value, setValue] = useState(0);
    const [dropdownValue, setDropDownValue] = useState('')
    const ctx = useContext(AccessoryContext)


    return (
        <div style={{flexFlow: 'row nowrap', marginBottom: '10px' }}>
            <Autocomplete
                sx={{minWidth: '200px', float: 'left'}}
                disablePortal
                id="engraving-dropdown"
                options={props.engravings}
                onInputChange={(event, newInputValue) => {
                    setDropDownValue(newInputValue);
                }}
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
                        min: props.min, 
                        max: props.max 
                    }
                }}
                value={value}
                onChange={(e) => {
                    // TODO: this needs to change, you can still just spam 0 in the input
                    var value = Number(e.target.value);
                    if (value > props.max) value = props.max;
                    if (value < props.min) value = props.min;

                    setValue(value);
                    ctx.accessoryContext[props.accessory].stats[dropdownValue] = value
                }}
            />
        </div>
    )
}