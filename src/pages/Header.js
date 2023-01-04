import * as React from 'react';
import { AppBar, Box, Toolbar, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom'

export default function Header() {
  const navigate = useNavigate()
    return (
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Button color="inherit" onClick={() => navigate("/")}>Engravings</Button>
            <Button color="inherit" onClick={() => navigate("/crafting")}>Crafting</Button>
            <Button color="inherit">Raid Groups</Button>
            <Button color="inherit" onClick={() => navigate("/split")}>Auction Split</Button>
          </Toolbar>
        </AppBar>
      </Box>
    );
  }