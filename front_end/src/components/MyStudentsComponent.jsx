import React from 'react';
import {Link} from 'react-router-dom'
function MyStudentsComponent() {
  return <div>
              <div className="card">
                      <h3 className="card-header">My Students</h3>
                      <div className="card-body">
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th>Username</th>
                                    <th>Course Taken</th>
                                    <th>Chat</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Rahul</td>
                                    <td>Python Basics</td>
                                    <td><Link to="" ><button className='btn btn-dark btn-sm  m-1'>Connect</button></Link></td>
                                </tr>
                                <tr>
                                    <td>Rahul</td>
                                    <td>Python Basics</td>
                                    <td><Link to="" ><button className='btn btn-dark btn-sm m-1'>Connect</button></Link></td>
                                </tr>
                                <tr>
                                    <td>Rahul</td>
                                    <td>Python Basics</td>
                                    <td><Link to="" ><button className='btn btn-dark btn-sm m-1'>Connect</button></Link></td>
                                </tr>
                                <tr>
                                    <td>Rahul</td>
                                    <td>Python Basics</td>
                                    <td><Link to="" ><button className='btn btn-dark btn-sm m-1'>Connect</button></Link></td>
                                </tr>
                                
                            </tbody>

                        </table>
                      </div>
                  </div>
  </div>;
}

export default MyStudentsComponent;
