import React from 'react';
import ThemeHeader from '../components/ThemeHeader';
import Footer from '../components/Footer';
import SignUp from '../components/SignUp';
function Register() {
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
