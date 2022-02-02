import {React,useEffect} from 'react';
import {Link} from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import MyCoursesComponent from '../components/MyCoursesComponent'
import UserSideBar from '../components/UserSideBar';
function MyCourses() {
    
    useEffect(() => {
        document.title="My Courses"
       
      });
  return <div>
      <Header/>
      <div className="container mt-4">
          <div className="row mb-5">
              <aside className='col-md-3'>
                    <UserSideBar/>
              </aside>
              <div className="col-md-9">
                    <MyCoursesComponent/>

              </div>
          </div>
      </div>
      <Footer/>
  </div>;
}

export default MyCourses;
