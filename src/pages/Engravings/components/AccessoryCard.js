import { Card, CardContent, CardHeader, CardMedia } from "@mui/material"
import { NegativeEngravings, MainEngravings, MainStats } from "../../../util/constants"
import { EngravingField } from "./EngravingField"
import { StatsField } from "./StatsField"

export const AccessoryCard = (props) => {

    return (
        <Card sx={{ minWidth: '300px', margin: '10px', backgroundColor: '#001E3C' }}>
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
                <StatsField accessory={props.accessory} label="Stat" engravings={MainStats} mainStats={2} min={0} max={500}/>
                <EngravingField accessory={props.accessory} label="Engraving 1" engravings={MainEngravings} min={0} max={6}/>
                <EngravingField accessory={props.accessory} label="Engraving 2" engravings={MainEngravings} min={0} max={6}/>
                <EngravingField accessory={props.accessory} label="Negative Engraving" engravings={NegativeEngravings} min={0} max={3}/>
            </CardContent>
        </Card>
    )   
}


    