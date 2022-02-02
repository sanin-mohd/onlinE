import {React,useEffect} from 'react';
import {Link} from 'react-router-dom'
import AdminHeader from '../admin components/AdminHeader'
import AdminUsersComponent from '../admin components/AdminUsersComponent' 
import AdminSideBar from '../admin components/AdminSideBar';

function AdminUsers() {
    useEffect(() => {
        document.title="Admin Users"
       
      });
  return <div>
      <AdminHeader/>
      <div className="container mt-4">
          <div className="row mb-5">
              <aside className='col-md-3'>
                    <AdminSideBar/>
              </aside>
              <div className="col-md-9">
                    <AdminUsersComponent/>
              </div>
          </div>
      </div>
  </div>;
}

export default AdminUsers;
