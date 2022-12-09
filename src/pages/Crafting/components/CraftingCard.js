import { useState } from "react"
import { Card, CardContent, CardHeader, CardMedia, TextField, MenuItem  } from "@mui/material"
import { MaterialField } from "./MaterialField"
import { Professions, FusionMaterials } from "../../../util/constants";

export const CraftingCard = (props) => {
    const [fusionMaterial, setFusionMaterial] = useState('bof')

    const handleChange = (event) => {
        setFusionMaterial(event.target.value);
    };

    console.log(Professions)
    console.log(props.profession)
    console.log(Professions[props.profession])

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
            <CardContent>
            <TextField
                id="outlined-fusion-material"
                select
                label="Fusion Material"
                value={fusionMaterial}
                onChange={handleChange}
                helperText="Select the fusion material"
            >
            {FusionMaterials.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                {option.label}
                </MenuItem>
            ))}
            </TextField>
                <MaterialField label="Fish" />
                <MaterialField label="Natural Pearl"/>
                <MaterialField label="Solar Oreha Carp"/>
            </CardContent>
        </Card>
    )   
}


    