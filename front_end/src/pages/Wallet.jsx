import React from 'react';
import {Link} from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import UserSideBar from '../components/UserSideBar';
import WalletComponent from '../components/WalletComponent';
function Wallet() {
  return <div>
      <Header/>
      <div className="container mt-4">
          <div className="row mb-5">
              
              <div className="col-md-12">
                    
                <WalletComponent/>
              </div>
          </div>
      </div>
      <Footer/>
  </div>;
}

export default Wallet;
