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
import BaseUrl from '../BaseUrl'
import axios from 'axios';
import Swal from 'sweetalert2'
import AuthContext from '../AuthContext'

const theme = createTheme();

export default function SignIn() {
  let {loginUser} = useContext(AuthContext)

  const [userDetails, setUserDetails] = useState({email:'',password:''});

  const handleChanges=((event)=>{
    setUserDetails({
      ...userDetails,[event.target.name] : event.target.value
    })
  })

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    // console.log({
    //   email: data.get('email'),
    //   password: data.get('password'),
    // });
    
    axios.post(BaseUrl+'token/',userDetails).then((response) => {
      loginUser(userDetails,response)

      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Successfully Logged In',
        showConfirmButton: false,
        timer: 1000
        })

    
    }).catch((error) => {
      console.log(error.response.data);
      console.log("CATCH BLOCK");
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'Invalid Credentials',
        showConfirmButton: false,
        timer: 1000
      })
        
    })
  }
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
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              onChange={handleChanges}
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              value={userDetails.email}
              autoComplete="email"
              autoFocus
            />
            <TextField
              onChange={handleChanges}
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              value={userDetails.password}
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button style={{backgroundColor:'black'}}
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        
      </Container>
    </ThemeProvider>
  );
}