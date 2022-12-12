import { useState, useContext } from "react"
import { Card, CardContent, CardHeader, CardMedia, TextField, MenuItem, Grid } from "@mui/material"
import { MaterialField } from "./MaterialField"
import { Professions, FusionMaterials } from "../../../util/constants";

export const CraftingCard = (props) => {
    const [fusionMaterial, setFusionMaterial] = useState('bof')
    const [efficiency, setEfficiency] = useState(0)
    const profObj = Professions[props.profession][fusionMaterial]


    const handleChange = (event) => {
        setFusionMaterial(event.target.value);
    };

    const priceCalc = (e) => {
        
        console.log('inside price calc')
        console.log(props.fusionPrice[fusionMaterial])
        console.log(e)
    }

    

    return (
        <Card sx={{ width: '33%', margin: '10px', backgroundColor: '#2c2f33' }}>
            <CardHeader
                avatar={
                    <CardMedia
                        component="img"
                        // sx={{ width: 151 }}
                        image={props.img}
                    />
                }
                title={props.title}
            />
            <h3>{efficiency}</h3>
            <CardContent>
            <TextField
                id="outlined-fusion-material"
                select
                label="Fusion Material"
                value={fusionMaterial}
                onChange={handleChange}
            >
            {FusionMaterials.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                {option.label}
                </MenuItem>
            ))}
            </TextField>
            {Object.keys(profObj).map((prof) => (
               <MaterialField label={profObj[prof][0]} priceCalc={(e) => priceCalc(e)}/>
            ))}
            </CardContent>
        </Card>
    )   
}


    