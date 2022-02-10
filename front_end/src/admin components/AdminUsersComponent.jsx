import {React,useEffect,useState} from 'react';
import {Link} from 'react-router-dom'
import {getAllUsers,updateUserStatus} from '../admin axios functions/Axios'

function AdminUsersComponent() {
    const [userStatus, setUserStatus] = useState(true);
    const arr = [1,2,3,4,5,6]
    const [users, setUsers] = useState([])
    const [loaded, setLoaded] = useState(false);
    useEffect(() => {
        getAllUsers().then((data) => {
            setUsers(data)
            data.map((user) =>{
                console.log(user.email);
            })
            console.log(loaded,data);
            
        })

    }, [userStatus])
  return <div>
              <div className="card">
                      <h3 className="card-header">Users</h3>
                      <div className="card-body">
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th>Email</th>
                                    <th>Courses Created</th>
                                    <th>Courses Enrolled</th>
                                    <th>Status</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody className="text-center">
                            {users && users.map((user, i) => {
                                return (
                                    <tr key={i} >
                                        <td className="toggler">{user.email}</td>
                                        <td>{user.courses_created}</td>
                                        <td>{user.courses_enrolled}</td>
                                        <td>{user.is_active ? <p className="card btn btn-info disabled text-dark">Active</p>:<p className="card btn btn-warning disabled text-dark">InActive</p>}</td>
                                        <td>
                                            <p  className="text-decoration-none" >
                                                {user.is_active ? 
                                                    <p onClick={()=>{updateUserStatus(false,user.id);setUserStatus(!userStatus) }} className='card btn btn-warning text-dark text-decoration-none'>Block</p>
                                                    :
                                                    <p onClick={()=>{updateUserStatus(true,user.id);setUserStatus(!userStatus)}} className='card btn btn-info text-dark text-decoration-none'>UnBlock</p>
                                                }
                                                
                                            </p>
                                        </td>
                                    
                                    </tr>
                                );
                            })}
                            </tbody>

                        </table>
                      </div>
                  </div>
  </div>;
}

export default AdminUsersComponent;
