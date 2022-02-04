import {React,useEffect,useContext} from 'react';
import ThemeHeader from '../components/ThemeHeader';
import Footer from '../components/Footer';
import SignUp from '../components/SignUp';
import AuthContext from '../AuthContext'
import { useNavigate } from 'react-router';

function Register() {
    const navigate = useNavigate()
    const {user} = useContext(AuthContext)
    useEffect(() => {
        document.title="Register Page"
      if (user){
        navigate('/home')
      }
     
    });

  return <div>
       <ThemeHeader/>
       <div className="container">
            <div className="row">
                <div className="col-12 mb-5">
                    <SignUp/>
                </div>
                
            </div>
        </div>
        <Footer/>
  </div>;
}

export default Register;
