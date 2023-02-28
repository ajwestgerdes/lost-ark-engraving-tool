import { useState } from "react";
import { CraftingCard } from "./components/CraftingCard";
import { TextField, Typography, Grid, Divider } from "@mui/material"



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
        sx={{padding: '20px'}}
      >
        <FusionField label={'Caldarr Fusion'} fusionId={'caldarrFusion'} fusionChange={(value, name) => fusionPriceCalc(value, name)}/>
        <FusionField label={'Simple Oreha Fusion'} fusionId={'simpleFusion'} fusionChange={(value, name) => fusionPriceCalc(value, name)}/>
        <FusionField label={'Basic Oreha Fusion'} fusionId={'basicFusion'} fusionChange={(value, name) => fusionPriceCalc(value, name)}/>
        <FusionField label={'Superior Oreha Fusion'} fusionId={'superiorFusion'} fusionChange={(value, name) => fusionPriceCalc(value, name)}/>
      </Grid>
      <Divider variant="middle" light={true} sx={{margin: '20px', background: '#383838'}} />
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        sx={{padding: '20px'}}
      >
        <CraftingCard profession={'fishing'} title={'Fishing'} fusionPrice={fusionPrice}/>
        <CraftingCard profession={'engraving'} title={'Engraving'} fusionPrice={fusionPrice}/>
        <CraftingCard profession={'hunting'} title={'Hunting'} fusionPrice={fusionPrice}/>
      </Grid>
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
          sx={{
            marginLeft: 'auto', 
            input: {
              color: "white",
              background: "#383838",
              outlineColor: 'white'
            }
          }}
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