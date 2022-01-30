import React from 'react';
import {Link} from 'react-router-dom'
function AdminSideBar() {
  return <div>
        <div className="card">
        
            <div className="list-group list-group-flush">
            <Link to="/admin/dashboard" className="list-group-item list-group-item-action">Dashboard</Link>
            <Link to="/admin/users" className="list-group-item list-group-item-action">Users</Link>
            <Link to="/admin/courses" className="list-group-item list-group-item-action">Courses</Link>
            <Link to="/admin/categories" className="list-group-item list-group-item-action">Category</Link>
            <Link to="/" className="list-group-item list-group-item-action text-danger">Log Out</Link>
            
            </div>

    </div>

  </div>;
}

export default AdminSideBar;
