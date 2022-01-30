import React from 'react';
import {Link} from 'react-router-dom'
function AdminCoursesComponent() {
  return <div>
              <div className="card">
                      <h3 className="card-header">Courses</h3>
                      <div className="card-body">
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th>Course Title</th>
                                    <th>Author</th>
                                    <th>Enrolled Students</th>
                                    <th>Pricing</th>
                                    <th>Status</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Python</td>
                                    <td>Rahul</td>
                                    <td>133</td>
                                    <td>₹1,400</td>
                                    <td><p className="card btn btn-info disabled text-dark">Active</p></td>
                                    <td><Link to="" className="text-decoration-none" ><p className='card btn btn-warning text-dark text-decoration-none'>Block</p></Link></td>
                                </tr>
                                <tr>
                                <td>Python</td>
                                    <td>Rahul</td>
                                    <td>133</td>
                                    <td>₹1,400</td>
                                    <td><p className="card btn btn-warning disabled text-dark">InActive</p></td>
                                    <td><Link to="" className="text-decoration-none" ><p className='card btn btn-info text-dark text-decoration-none'>UnBlock</p></Link></td>
                                </tr>
                                <tr>
                                    <td>Python</td>
                                    <td>Rahul</td>
                                    <td>133</td>
                                    <td>₹1,400</td>
                                    <td><p className="card btn btn-info disabled text-dark">Active</p></td>
                                    <td><Link to="" className="text-decoration-none" ><p className='card btn btn-warning text-dark text-decoration-none'>Block</p></Link></td>
                                </tr>
                                <tr>
                                    <td>Python</td>
                                    <td>Rahul</td>
                                    <td>133</td>
                                    <td>₹1,400</td>
                                    <td><p className="card btn btn-info disabled text-dark">Active</p></td>
                                    <td><Link to="" className="text-decoration-none" ><p className='card btn btn-warning text-dark text-decoration-none'>Block</p></Link></td>
                                </tr>
                                
                            </tbody>

                        </table>
                      </div>
                  </div>
  </div>;
}

export default AdminCoursesComponent;
