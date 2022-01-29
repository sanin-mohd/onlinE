import React from 'react';
import {Link} from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import UserSideBar from '../components/UserSideBar';
import ProfileSettingsComponent from '../components/ProfileSettingsComponent'

function ProfileSettings() {
  return <div>
      <Header/>
      <div className="container mt-4">
          <div className="row mb-5">
              <aside className='col-md-3'>
                    <UserSideBar/>
              </aside>
              <div className="col-md-9">
                    <ProfileSettingsComponent/>
              </div>
          </div>
      </div>
      <Footer/>
  </div>;
}

export default ProfileSettings;