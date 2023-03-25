import { Card, CardContent, CardHeader, CardMedia} from "@mui/material"
import { MainEngravings,  ClassEngravings } from "../../../util/constants"
import { EngravingField } from "./EngravingField"

export const EngravingBooks = (props) => {
    return (
        <Card sx={{ minWidth: '300px', margin: '10px', backgroundColor: '#383838' }}>
            <CardHeader
                avatar={
                    <CardMedia
                        component="img"
                        image={props.img}
                    />
                }
                title={props.title}
            />
            <CardContent>
                <EngravingField label="Engraving 1" engravings={MainEngravings} min={0} max={12}/>
                <EngravingField label="Engraving 2" engravings={MainEngravings} min={0} max={12}/>
            </CardContent>
        </Card>
    )   
}

