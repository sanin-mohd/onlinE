import React from 'react';
import {Link} from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import UserSideBar from '../components/UserSideBar';
import MessengerComponent from '../components/MessengerComponent';
function Messenger() {
  return <div>
      <Header/>
      <div className="container mt-4">
          <div className="row mb-5">
              <div className="col-md-12"> 
                <MessengerComponent/>
              </div>
          </div>
      </div>
      <Footer/>
  </div>;
}

export default Messenger;