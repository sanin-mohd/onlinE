import {React,useEffect,useContext} from 'react';
import ThemeHeader from '../components/ThemeHeader';
import Footer from '../components/Footer';
import SignIn from '../components/SignIn'
import AuthContext from '../AuthContext'
import { useNavigate } from 'react-router';


function Login() {
  const navigate = useNavigate()
  const {user} = useContext(AuthContext)
  useEffect(() => {
    document.title="Login Page"
    if (user){
      navigate('/home')
    }
   
  });
  return <div>
       <ThemeHeader/>
        <div className="container mt-5">
            <div className="row">
            <div className="col-12 mb-5">
                <SignIn/>
                </div>
                
                
            </div>
        </div>
       
        
        <Footer/>
  </div>;
}

export default Login;
