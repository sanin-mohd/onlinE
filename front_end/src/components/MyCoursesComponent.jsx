import React from 'react';
import {Link} from 'react-router-dom'
function MyCoursesComponent() {
  return <div>
              <div className="card">
                      <h3 className="card-header">My Courses</h3>
                      <div className="card-body">
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th>Course Title</th>
                                    <th>Enrolled Students</th>
                                    <th>Revenue</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Python Basics</td>
                                    <td>2342</td>
                                    <td>₹25,000</td>
                                    <td><Link to="" ><button className='btn btn-dark btn-sm  m-1'>Unlist</button></Link></td>
                                </tr>
                                <tr>
                                    <td>Python Basics</td>
                                    <td>2342</td>
                                    <td>₹25,000</td>
                                    <td><Link to="" ><button className='btn btn-dark btn-sm m-1'>Unlist</button></Link></td>
                                </tr>
                                <tr>
                                    <td>Python Basics</td>
                                    <td>2342</td>
                                    <td>₹25,000</td>
                                    <td><Link to="" ><button className='btn btn-dark btn-sm m-1'>Unlist</button></Link></td>
                                </tr>
                                <tr>
                                    <td>Python Basics</td>
                                    <td>2342</td>
                                    <td>₹25,000</td>
                                    <td><Link to="" ><button className='btn btn-dark btn-sm m-1'>Unlist</button></Link></td>
                                </tr>
                                
                            </tbody>

                        </table>
                      </div>
                  </div>
  </div>;
}

export default MyCoursesComponent;