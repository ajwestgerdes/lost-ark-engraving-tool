import { useState, useContext } from "react"
import { TextField, Autocomplete } from "@mui/material"
import { AccessoryContext } from "../../../util/Context";

export const EngravingField = (props) => {
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
                renderInput={(params) => {
                    <TextField {...params} 
                        sx={{ 
                            marginBottom: '10px',
                            input: {
                                color: "white",
                                background: "#383838",
                                outlineColor: 'white'
                            }
                        }} 
                        label={props.label} />
                }}
                
            />
            <TextField
                sx={{
                    maxWidth: '60px', 
                    float: 'right', 
                    marginBottom: '10px',
                    input: {
                        color: "white",
                        background: "#383838",
                        outlineColor: 'white'
                      }
                }}
                id="outlined-number"
                type="numberformat"
                InputProps={{
                    inputProps: { 
                        min: props.min, 
                        max: props.max 
                    }
                }}
                value={value}
                onChange={(e) => {
                    // TODO: this needs to change, you can still just spam 0 in the input
                    var value = parseInt(e.target.value, 10);
                    if (value > props.max) value = props.max;
                    if (value < props.min) value = props.min;

                    setValue(value);
                    ctx.accessoryContext[props.accessory][dropdownValue] = value
                }}
            />
        </div>
    )
}