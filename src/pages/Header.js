import * as React from 'react';
import { AppBar, Box, Toolbar, Button, Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Paper} from '@mui/material';
import Draggable from 'react-draggable';
import { useNavigate } from 'react-router-dom'

export default function Header() {
  const navigate = useNavigate()
  const [open, setOpen] = React.useState(false);

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
