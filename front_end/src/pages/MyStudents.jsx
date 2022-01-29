import React from 'react';
import {Link} from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import MyStudentsComponent from '../components/MyStudentsComponent'
import UserSideBar from '../components/UserSideBar';
function MyStudents() {
  return <div>
      <Header/>
      <div className="container mt-4">
          <div className="row mb-5">
              <aside className='col-md-3'>
                    <UserSideBar/>
              </aside>
              <div className="col-md-9">
                    <MyStudentsComponent/>

              </div>
          </div>
      </div>
      <Footer/>
  </div>;
}

export default MyStudents;
