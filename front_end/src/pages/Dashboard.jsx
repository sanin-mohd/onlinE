import React from 'react';
import {Link} from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
function Dashboard() {
  return <div>
      <Header/>
      <div className="container mt-4">
          <div className="row mb-5">
              <aside className='col-md-3'>
                  <div className="card">
                      
                      <div className="list-group list-group-flush">
                        <Link to="/dashboard" className="list-group-item list-group-item-action">My Dashboard</Link>
                        <Link to="/my_courses" className="list-group-item list-group-item-action">My Courses</Link>
                        <Link to="/add_course" className="list-group-item list-group-item-action">Add Course</Link>
                        <Link to="/students" className="list-group-item list-group-item-action">My Students</Link>
                        <Link to="/wallet" className="list-group-item list-group-item-action">Enrolled Courses</Link>
                        <Link to="/wallet" className="list-group-item list-group-item-action">Profile Settings</Link>
                        <Link to="/wallet" className="list-group-item list-group-item-action">Change Password</Link>
                        <Link to="/logout" className="list-group-item list-group-item-action text-danger">Log Out</Link>
                        
                        

                      </div>

                  </div>

              </aside>
              <div className="col-md-9">
                  <div className="card">
                      <div className="card-body">
                        <table className="table table-bordered">

                        </table>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      <Footer/>
  </div>;
}

export default Dashboard;
