import { useState } from "react"
import { Card, CardContent, TextField, Autocomplete } from "@mui/material"
import { negativeEngravings, mainEngravings, classEngravings } from "../util/constants"
import { EngravingField } from "./EngravingField"

export const AbilityStone = (props) => {
    return (
        <Card sx={{ minWidth: '300px', margin: '10px', backgroundColor: '#2c2f33' }}>
            <CardContent>
                <EngravingField label="Engraving 1" engravings={mainEngravings} min={0} max={12}/>
                <EngravingField label="Engraving 2" engravings={mainEngravings} min={0} max={12}/>
            </CardContent>
        </Card>
    )   
}

