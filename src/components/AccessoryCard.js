import { Card, CardMedia, CardContent, Typography, TextField, CardActions, Button } from "@mui/material"

export const AccessoryCard = (props) => {
    return (
        <Card sx={{maxWidth: '300px', flexFlow: 'column wrap'}}>
            <CardContent>
                <div style={{flexFlow: 'row wrap', marginBottom: '10px'}}>
                    <TextField sx={{maxWidth: '200px'}}  id="outlined-basic" label="Engraving 1" variant="outlined" />
                    <TextField
                        sx={{maxWidth: '60px', float: 'right'}}
                        id="outlined-number"
                        type="number"                      
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                </div>
                <div style={{flexFlow: 'row wrap', marginBottom: '10px'}}>
                    <TextField sx={{maxWidth: '200px'}}  id="outlined-basic" label="Engraving 1" variant="outlined" />
                    <TextField
                        sx={{maxWidth: '60px', float: 'right'}}
                        id="outlined-number"
                        type="number"
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                </div>
                <div style={{flexFlow: 'row wrap', marginBottom: '10px'}}>
                    <TextField sx={{maxWidth: '200px'}}  id="outlined-basic" label="Engraving 1" variant="outlined" />
                    <TextField
                        sx={{maxWidth: '60px', float: 'right'}}
                        id="outlined-number"
                        type="number"
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                </div>
            </CardContent>
        </Card>
    )   
}