import {React,useContext} from 'react';
import {Link} from 'react-router-dom'
import AuthContext from '../AuthContext';
function UserSideBar() {
 const {logOutUser} = useContext(AuthContext)
  return <div>
        <div className="card">
        
            <div className="list-group list-group-flush">
            <Link to="/dashboard" className="list-group-item list-group-item-action">My Dashboard</Link>
            <Link to="/my_courses" className="list-group-item list-group-item-action">My Courses</Link>
            <Link to="/add_course" className="list-group-item list-group-item-action">Add Course</Link>
            <Link to="/my_students" className="list-group-item list-group-item-action">My Students</Link>
            <Link to="/enrolled_courses" className="list-group-item list-group-item-action">Enrolled Courses</Link>
            <Link to="/profile_settings" className="list-group-item list-group-item-action">Profile Settings</Link>
            <Link to="/change_password" className="list-group-item list-group-item-action">Change Password</Link>
            <p onClick={logOutUser} className="list-group-item list-group-item-action text-danger">Log Out</p>
            
            

            </div>

    </div>

  </div>;
}

export default UserSideBar;
