import React from 'react';
import {Link} from 'react-router-dom'
import AdminHeader from '../admin components/AdminHeader'
import AdminSideBar from '../admin components/AdminSideBar';
import AdminDashboardComponent from '../admin components/AdminDashboardComponent';
function AdminDashboard() {
  return <div>
      <AdminHeader/>
      <div className="container mt-4">
          <div className="row mb-5">
              <aside className='col-md-3'>
                    <AdminSideBar/>
              </aside>
              <div className="col-md-9">
                <AdminDashboardComponent/>
              </div>
          </div>
      </div>
      
  </div>;
}

export default AdminDashboard;
