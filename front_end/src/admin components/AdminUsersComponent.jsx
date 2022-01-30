import React from 'react';
import {Link} from 'react-router-dom'
function AdminUsersComponent() {
  return <div>
              <div className="card">
                      <h3 className="card-header">Users</h3>
                      <div className="card-body">
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th>Username</th>
                                    <th>Courses Taken</th>
                                    <th>Courses Enrolled</th>
                                    <th>Status</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Rahul</td>
                                    <td>3</td>
                                    <td>13</td>
                                    <td><p className="card btn btn-info disabled text-dark">Active</p></td>
                                    <td><Link to="" className="text-decoration-none" ><p className='card btn btn-warning text-dark text-decoration-none'>Block</p></Link></td>
                                </tr>
                                <tr>
                                    <td>Rahul</td>
                                    <td>3</td>
                                    <td>13</td>
                                    <td><p className="card btn btn-warning disabled text-dark">InActive</p></td>
                                    <td><Link to="" className="text-decoration-none" ><p className='card btn btn-info text-dark text-decoration-none'>UnBlock</p></Link></td>
                                </tr>
                                <tr>
                                    <td>Rahul</td>
                                    <td>3</td>
                                    <td>13</td>
                                    <td><p className="card btn btn-info disabled text-dark">Active</p></td>
                                    <td><Link to="" className="text-decoration-none" ><p className='card btn btn-warning text-dark text-decoration-none'>Block</p></Link></td>
                                </tr>
                                <tr>
                                    <td>Rahul</td>
                                    <td>3</td>
                                    <td>13</td>
                                    <td><p className="card btn btn-info disabled text-dark">Active</p></td>
                                    <td><Link className="text-decoration-none" to="" ><p className='card btn btn-warning text-dark'>Block</p></Link></td>
                                </tr>
                                
                            </tbody>

                        </table>
                      </div>
                  </div>
  </div>;
}

export default AdminUsersComponent;
