import {React,useEffect} from 'react';
import {Link} from 'react-router-dom'
import AdminHeader from '../admin components/AdminHeader'
import AdminCoursesComponent from '../admin components/AdminCoursesComponent' 
import AdminSideBar from '../admin components/AdminSideBar';

function AdminCourses() {
    useEffect(() => {
        document.title="Admin Courses"
       
      });
  return <div>
      <AdminHeader/>
      <div className="container mt-4">
          <div className="row mb-5">
              <aside className='col-md-3'>
                    <AdminSideBar/>
              </aside>
              <div className="col-md-9">
                    <AdminCoursesComponent/>
              </div>
          </div>
      </div>
  </div>;
}

export default AdminCourses;