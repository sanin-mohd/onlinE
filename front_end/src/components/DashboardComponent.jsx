import React from 'react';
import {Link} from 'react-router-dom'
function DashboardComponent() {
  return <div>
            <div className="card">
                      <h3 className="card-header">Dashboard </h3>
                      <div className="card-body">
                      <span className="float-end fw-bold">Balance : ₹2500 </span> 
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th>Course Title</th>
                                    <th>Created By</th>
                                    <th>Chat</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Python Basics</td>
                                    <td>Rahul</td>
                                    <td><Link to="" ><button className='btn btn-dark btn-sm  m-1'>Connect</button></Link></td>
                                </tr>
                                <tr>
                                    <td>Python Basics</td>
                                    <td>Rahul</td>
                                    <td><Link to="" ><button className='btn btn-dark btn-sm m-1'>Connect</button></Link></td>
                                </tr>
                                <tr>
                                    <td>Python Basics</td>
                                    <td>Rahul</td>
                                    <td><Link to="" ><button className='btn btn-dark btn-sm m-1'>Connect</button></Link></td>
                                </tr>
                                <tr>
                                    <td>Python Basics</td>
                                    <td>Rahul</td>
                                    <td><Link to="" ><button className='btn btn-dark btn-sm m-1'>Connect</button></Link></td>
                                </tr>
                                
                            </tbody>

                        </table>
                      </div>
                  </div>
  </div>;
}

export default DashboardComponent;