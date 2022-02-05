import {React,useContext} from 'react';
import {Link} from 'react-router-dom'
import AuthContext from '../AuthContext'

function AdminSideBar() {
  const {user,logOutUser} = useContext(AuthContext)
  return <div>
        <div className="card">
        
            <div className="list-group list-group-flush">
            <Link to="/admin/dashboard" className="list-group-item list-group-item-action">Dashboard</Link>
            <Link to="/admin/users" className="list-group-item list-group-item-action">Users</Link>
            <Link to="/admin/courses" className="list-group-item list-group-item-action">Courses</Link>
            <Link to="/admin/categories" className="list-group-item list-group-item-action">Category</Link>
            <p onClick={logOutUser} className="list-group-item list-group-item-action text-danger">Log Out</p>
            
            </div>

    </div>

  </div>;
}

export default AdminSideBar;
