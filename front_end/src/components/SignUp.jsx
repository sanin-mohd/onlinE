import {React,useEffect,useState} from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import BaseUrl from '../BaseUrl';
import axios from 'axios';
import Swal from 'sweetalert2'

const theme = createTheme();

export default function SignUp() {
  const [userDetails, setUserDetails] = useState({
      'username': '',
      'mobile': '',
      'email': '',
      'password': '',
      'interests': ''

  });

  const handleChanges=((event) => {
        setUserDetails({
          ...userDetails,
          [event.target.name]:event.target.value
        })
        console.log(userDetails);
  })

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    
    try{
      axios.post(BaseUrl+'users_list',data).then((response) => {
      console.log(response.data);
      
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Registration completed successfully',
        showConfirmButton: false,
        timer: 1500
      })
      })
    }
    catch(err) {
      console.log(err);
      

    }

    
    console.log({
      username: data.get('username'),
      mobile: data.get('mobile'),
      email: data.get('email'),
      password: data.get('password'),
      interests: data.get('interests'),
    });
  };

  return (
    <ThemeProvider theme={theme}>
      
      
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar style={{backgroundColor:'black'}} sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon style={{backgroundColor:'black'}} />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>

          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  onChange={handleChanges}
                  autoComplete="given-name"
                  name="username"
                  required
                  fullWidth
                  id="firstName"
                  label="Username"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  onChange={handleChanges}
                  required
                  fullWidth
                  id="lastName"
                  label="Contact (+91)"
                  name="mobile"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  onChange={handleChanges}
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  onChange={handleChanges}
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12}>
              <textarea className="form-control" onChange={handleChanges} name="interests" style={{width:'100%'}} placeholder="Interests [eg: Python, Java, Django....]" />
                
              </Grid>
              
            </Grid>
            <Button style={{backgroundColor:'black'}}
              type="submit"
              fullWidth
              variant="contained"
              
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="#" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        
      </Container>
    </ThemeProvider>
  );
}