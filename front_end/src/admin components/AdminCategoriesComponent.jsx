import React from 'react';
import {Link} from 'react-router-dom'
function AdminCategoriesComponent() {
  return <div>
              <div className="card">
                      <h3 className="card-header">Categories</h3>
                      <div className="card-body">
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th>Category Name</th>
                                    <th>Description</th>
                                    <th>Courses Available</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Full stack Development</td>
                                    <td><p>Building a Real world project Using Different Frameworks</p></td>
                                    <td>1,400</td>
                                    <td><Link to="" className="text-decoration-none" ><p className='card btn btn-danger text-dark text-decoration-none'>Delete</p></Link></td>
                                </tr>
                                <tr>
                                    <td>Full stack Development</td>
                                    <td><p>Building a Real world project Using Different Frameworks</p></td>
                                    <td>1,400</td>
                                    <td><Link to="" className="text-decoration-none" ><p className='card btn btn-danger text-dark text-decoration-none'>Delete</p></Link></td>
                                </tr>
                                <tr>
                                    <td>Full stack Development</td>
                                    <td><p>Building a Real world project Using Different Frameworks</p></td>
                                    <td>1,400</td>
                                    <td><Link to="" className="text-decoration-none" ><p className='card btn btn-danger text-dark text-decoration-none'>Delete</p></Link></td>
                                </tr>
                                <tr>
                                    <td>Full stack Development</td>
                                    <td><p>Building a Real world project Using Different Frameworks</p></td>
                                    <td>1,400</td>
                                    <td><Link to="" className="text-decoration-none" ><p className='card btn btn-danger text-dark text-decoration-none'>Delete</p></Link></td>
                                </tr>
                                
                            </tbody>

                        </table>
                      </div>
                  </div>
  </div>;
}

export default AdminCategoriesComponent;
