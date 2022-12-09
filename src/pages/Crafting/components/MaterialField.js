import { useState } from "react"
import { TextField, Typography } from "@mui/material"


export const MaterialField = (props) => {
    const [value, setValue] = useState(0);
    
    return (
        <div style={{flexFlow: 'row nowrap', marginBottom: '10px' }}>
            <Typography variant="body1" gutterBottom>
                {props.label}
            </Typography>

            <TextField
                sx={{maxWidth: '60px', float: 'right', marginBottom: '10px'}}
                id="outlined-number"
                type="number"
                value={value}
                onChange={(e) => {
                    setValue(value);
                }}
            />
        </div>
    )
}