import { useState, useContext } from "react"
import { Card, CardContent, CardHeader, CardMedia, TextField, MenuItem, Grid, Typography } from "@mui/material"
import { MaterialField } from "./MaterialField"
import { Professions, FusionMaterials } from "../../../util/constants";

export const CraftingCard = (props) => {
    const [fusionMaterial, setFusionMaterial] = useState('bof')
    const [efficiency, setEfficiency] = useState(0)
    const [priceObj, setPriceObj] = useState({})
    const [effColor, setEffColor] = useState()
    
    const profObj = Professions[props.profession][fusionMaterial]

    const handleChange = (event) => {
        setFusionMaterial(event.target.value);
    };

    const priceCalc = (ahPrice, ahStack, craftStack, matId) => {
        const totalFusionPrice = props.fusionPrice[fusionMaterial] * 30
        priceObj[matId] = (ahPrice * craftStack) / ahStack
        const values = Object.values(priceObj);

        const sum = values.reduce((accumulator, value) => {
        return accumulator + value;
        }, 0);

        setEfficiency(Math.round((totalFusionPrice / sum) * 100) - 100)
    }

    

    return (
        <Card sx={{ width: '30%', margin: '10px', backgroundColor: '#2c2f33' }}>
            <Grid
                container
                direction="row"
                justifyContent="space-between"
                alignItems="center"
            >
                <Typography>{props.title}</Typography>
                <Typography sx={{ color: efficiency > -1 ? 'green' : 'red'}}>{efficiency}%</Typography>
            </Grid>
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
                    <MaterialField
                        label={profObj[prof][0]} 
                        ahStack={profObj[prof][2]}
                        craftStack={profObj[prof][1]}
                        matId={prof} 
                        priceCalc={(ahPrice, ahStack, craftStack, matId) => priceCalc(ahPrice, ahStack, craftStack, matId)}/>
                ))}
            </CardContent>
        </Card>
    )   
}


    