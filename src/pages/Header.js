import {useState} from 'react';
import { InputLabel, Select, AppBar, Box, Toolbar, Button, Dialog, DialogActions, DialogContent, DialogTitle, Paper, FormControl, MenuItem, TextField} from '@mui/material';
import Draggable from 'react-draggable';
import { useNavigate } from 'react-router-dom'

export default function Header() {
  const navigate = useNavigate()
  const [open, setOpen] = useState(false);

  const handlePopupOpen = () => {
    setOpen(true)
  }

  const handlePopupClose = () => {
    setOpen(false)
  }
  
    return (
      <Box sx={{ flexGrow: 1}}>
        <AppBar sx={{background: '#383838', color: 'white'}} position="static">
          <Toolbar>
            <Button color="inherit" onClick={() => navigate("/")}>Engravings</Button>
            <Button color="inherit" onClick={() => navigate("/crafting")}>Crafting</Button>
            <Button color="inherit">Raid Groups</Button>
            <Button variant="outlined" onClick={handlePopupOpen}>
              Auction Calculator
            </Button>
      <Dialog
        open={open}
        onClose={handlePopupClose}
        PaperComponent={PaperComponent}
        aria-labelledby="draggable-dialog-title"
      >
        <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">
          Auction Calculator
        </DialogTitle>
        <DialogContent>
          <PartySizeSelector />
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handlePopupClose}>
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
          </Toolbar>
        </AppBar>
      </Box>
    );
  }

function PaperComponent(props) {
  return (
    <Draggable
      handle="#draggable-dialog-title"
      cancel={'[class*="MuiDialogContent-root"]'}
    >
      <Paper {...props} />
    </Draggable>
  );
}

function PartySizeSelector() {
  const [partySize, setPartySize] = useState('');
  const [marketPrice, setMarketPrice] = useState(0)

  const handlePartySize = (event) => {
    setPartySize(event.target.value);
  };

  const handleMarketPrice = (event) => {
    setMarketPrice(event.target.value)
  }

  return (
  <FormControl fullWidth>
    <Box>
    <TextField
                    
                    label="MarketPrice"
                    value={marketPrice}
                    onChange={handleMarketPrice}
                >
                  </TextField>
    </Box>
  <InputLabel id="demo-simple-select-label">Party Size</InputLabel>
  <Select
    value={partySize}
    placeholder="Party Size"
    onChange={handlePartySize}
  >
    <MenuItem value={4}>4</MenuItem>
    <MenuItem value={8}>8</MenuItem>
  </Select>
</FormControl>
  )
}
