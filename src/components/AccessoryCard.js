import { useState } from "react"
import { Card, CardContent, CardHeader, CardMedia } from "@mui/material"
import { negativeEngravings, mainEngravings } from "../util/constants"
import { EngravingField } from "./EngravingField"

export const AccessoryCard = (props) => {
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
                <EngravingField label="Engraving 1" engravings={mainEngravings} min={0} max={6}/>
                <EngravingField label="Engraving 2" engravings={mainEngravings} min={0} max={6}/>
                <EngravingField label="Negative Engraving" engravings={negativeEngravings} min={0} max={3}/>
            </CardContent>
        </Card>
    )   
}


    