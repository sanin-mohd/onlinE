import {React,useEffect} from 'react';
import {Link} from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import EnrolledComponent from '../components/EnrolledComponent'
import UserSideBar from '../components/UserSideBar';

function EnrolledCourses() {
    useEffect(() => {
        document.title="Enrolled Courses"
       
      });
  return <div>
      <Header/>
      <div className="container mt-4">
          <div className="row mb-5">
              <aside className='col-md-3'>
                    <UserSideBar/>
              </aside>
              <div className="col-md-9">
                    <EnrolledComponent/>

              </div>
          </div>
      </div>
      <Footer/>
  </div>;
}

export default EnrolledCourses;
