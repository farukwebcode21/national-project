import { Container } from '@mui/material';
import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';




const Header = () => {
  return (
    <Container>
      <Box sx={{ alignItems: 'flex-start' }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h7" component="div" sx={{ flexGrow: 1 }}>
              Bangladesh National Portal
          </Typography>
          <Button color="inherit">Bangla</Button>
          <Button color="inherit">English</Button>
        </Toolbar>
      </AppBar>
      </Box>
    </Container>
  )
}

export default Header