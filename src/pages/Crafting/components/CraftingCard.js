import { useState, useEffect } from "react"
import { Card, CardContent, TextField, MenuItem, Grid, Typography } from "@mui/material"
import { MaterialField } from "./MaterialField"
import { Professions, FusionMaterials } from "../../../util/constants";

export const CraftingCard = (props) => {
    const [fusionMaterial, setFusionMaterial] = useState('superiorFusion')
    const [efficiency, setEfficiency] = useState(0)
    const [priceObj, setPriceObj] = useState({})

    const profObj = Professions[props.profession][fusionMaterial]

    useEffect(() => {
        console.log(props)
        efficiencyCalc(priceObj)
      }, [fusionMaterial, props.fusionPrice])

    const handleChange = (event) => {
        setFusionMaterial(event.target.value);
        efficiencyCalc(priceObj)
    };
 
    const createPriceObj = (ahPrice, ahStack, craftStack, matId) => {
        priceObj[matId] = (ahPrice * craftStack) / ahStack

        efficiencyCalc(priceObj)     
    }

    const efficiencyCalc = (priceObj) => {
        const totalFusionPrice = props.fusionPrice[fusionMaterial] * (fusionMaterial === 'superiorFusion' ? 20 : 30)
        const values = Object.values(priceObj);

        const sum = values.reduce((accumulator, value) => {
        return accumulator + value;
        }, 0);

        setEfficiency(Math.round((totalFusionPrice / sum) * 100) - 100)
    }

    return (
        <Card sx={{ width: '30%', backgroundColor: '#383838', border: '1px solid black', color: 'white'}}>
            <Grid
                container
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                sx={{padding: '16px'}}
            >
                <Typography>{props.title}</Typography>
                <Typography sx={{ color: efficiency > -1 ? 'green' : 'red'}}>{~~efficiency}%</Typography>
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
                        priceCalc={(ahPrice, ahStack, craftStack, matId) => createPriceObj(ahPrice, ahStack, craftStack, matId)}/>
                ))}
            </CardContent>
        </Card>
    )   
}


    