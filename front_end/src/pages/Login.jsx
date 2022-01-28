import React from 'react';
import ThemeHeader from '../components/ThemeHeader';
import Footer from '../components/Footer';
import SignIn from '../components/SignIn'

function Login() {
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
