import { Container, Grid , TextField, Button} from '@mui/material';
import React from 'react';
import login_logo from '../../images/logo.png';
import login_bottom from '../../images/login_bottom.png';
import Typography from '@mui/material/Typography';
import { Link, NavLink } from 'react-router-dom';


const Login = () => {

  const handleLoginSubmit = e =>{
    e.preventDefault();
  }
  return (
    <Container sx={{mt:2}}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={8}>
            <img style={{width:'75%'}} src={login_logo} alt=""/>
        </Grid>
        <Grid item xs={12} md={4} sx={{mt:20}}>
        <Typography variant="h5" gutterBottom>Welcome</Typography>
        <Typography variant="body1" gutterBottom>Digital Dashboard</Typography>
          <form onSubmit={handleLoginSubmit}>
          <TextField 
            sx={{width:'75%', m:1}}
            id="standard-basic"
            label="user name" 
            variant="standard" />
           <TextField 
           sx={{width:'75%', m:1}}
            id="standard-basic"
            label="password" 
            type="password"
            variant="standard" />
            <Button variant="contained">Sign In</Button><br></br>
            <Link to="/register"><Button size="small" variant="text">Don't have any account ? Sign Up</Button></Link>
          </form>
        </Grid>
      </Grid>
      <img style={{width:'100%'}} src={login_bottom} alt=""/>
    </Container>
  )
}

export default Login