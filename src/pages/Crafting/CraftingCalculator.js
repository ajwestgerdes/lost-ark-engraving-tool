import { useState } from "react";
import { CraftingCard } from "./components/CraftingCard";
import { TextField, Typography, Grid } from "@mui/material"



export default function CraftingCalculator() {
  const [fusionPrice, setFusionPrice] = useState({})

  const fusionPriceCalc = (value, name) => {
      fusionPrice[name] = value
      return fusionPrice
  }
  

  return (
    <div>
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <FusionField label={'Simple Oreha Fusion'} fusionId={'sof'} fusionChange={(value, name) => fusionPriceCalc(value, name)}/>
        <FusionField label={'Basic Oreha Fusion'} fusionId={'bof'} fusionChange={(value, name) => fusionPriceCalc(value, name)}/>
        <FusionField label={'New Oreha Fusion'} fusionId={'nof'} fusionChange={(value, name) => fusionPriceCalc(value, name)}/>
      </Grid> 
      <CraftingCard profession={'fishing'} title={'Fishing'} fusionPrice={fusionPrice}/>
      <CraftingCard profession={'engraving'} title={'Engraving'} fusionPrice={fusionPrice}/>
    </div>       
  );
}

const FusionField = (props) => {
  const [value, setValue] = useState(0)

  return (
    <div>
      <Grid item>
        <Typography variant="body1" gutterBottom>
            {props.label}
        </Typography>
      </Grid>
      <Grid item>
          <TextField
            sx={{marginLeft: 'auto'}}
            id="outlined-number"
            type="numberformat"
            value={value}
            onChange={(e) => {
                setValue(e.target.value);
                props.fusionChange(e.target.value, props.fusionId)
            }}
          />
        </Grid>  
    </div>
  )
}