import { useState } from "react"
import { Card, CardContent, CardHeader, CardMedia } from "@mui/material"
import { NegativeEngravings, MainEngravings, classEngravings } from "../../../util/constants"
import { EngravingField } from "./EngravingField"

export const AbilityStone = (props) => {
    return (
        <Card sx={{ minWidth: '300px', margin: '10px', backgroundColor: '#2c2f33' }}>
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
                <EngravingField label="Engraving 1" engravings={MainEngravings} min={0} max={10}/>
                <EngravingField label="Engraving 2" engravings={MainEngravings} min={0} max={10}/>
                <EngravingField label="Negative Engraving" engravings={NegativeEngravings} min={0} max={10}/>
            </CardContent>
        </Card>
    )   
}