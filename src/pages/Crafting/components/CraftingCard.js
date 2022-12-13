import { useState, useContext } from "react"
import { Card, CardContent, CardHeader, CardMedia, TextField, MenuItem, Grid } from "@mui/material"
import { MaterialField } from "./MaterialField"
import { Professions, FusionMaterials } from "../../../util/constants";

export const CraftingCard = (props) => {
    const [fusionMaterial, setFusionMaterial] = useState('bof')
    const [efficiency, setEfficiency] = useState(0)
    const profObj = Professions[props.profession][fusionMaterial]
    const priceObj = {}

    console.log(profObj)


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

        
        
        console.log('--------------------------')
        console.log(priceObj)
        console.log(props.fusionPrice[fusionMaterial])
        console.log(totalFusionPrice)
        console.log(ahPrice)
        console.log(ahStack)
        console.log(craftStack)
        console.log(matId)
        console.log(sum)
        console.log('--------------------------')
        return (totalFusionPrice / sum) * 100
    }

    // figure out how to set this and keep the price obj pressistent
    setEfficiency()
    

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
            <h3>{efficiency}%</h3>
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


    