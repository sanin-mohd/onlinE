import {React,useEffect,useState,useContext} from 'react';
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
import {useNavigate} from 'react-router'
import AuthContext from '../AuthContext'
const theme = createTheme();

export default function SignUp() {
  let {loginUser} = useContext(AuthContext)
  let navigate = useNavigate()
  const [userDetails, setUserDetails] = useState({
      'username': '',
      'mobile': '',
      'email': '',
      'password': '',
      'interests': '',
      'is_active': 'True',

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
    const loginDetails = {'email':userDetails.email, 'password':userDetails.password}

      axios.post(BaseUrl+'users_list',userDetails).then((response) => {
      console.log(response.data);
      axios.post(BaseUrl+'token/',loginDetails).then((response) => {
        loginUser(loginDetails,response)
      })
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Registration completed successfully',
        showConfirmButton: false,
        timer: 1000
        })

      
    }).catch((error) => {
      console.log(error.response.data);
      console.log("---------------CATCH BLOCK");
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'Something Went Wrong',
        showConfirmButton: false,
        timer: 1000
      })
        
    })
      


    
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
                  value={userDetails.username}
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
                  value={userDetails.mobile}
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
                  value={userDetails.email}
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
                  value={userDetails.password}
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12}>
              <textarea className="form-control" value={userDetails.interests} onChange={handleChanges} name="interests" style={{width:'100%'}} placeholder="Interests [eg: Python, Java, Django....]" />
                
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