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
                                    <th>Progress</th>
                                    <th>Help</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Rahul</td>
                                    <td>Python Basics</td>
                                    <td>
                                    <div className="progress">
                                        <div className="progress-bar progress-bar-striped bg-success" role="progressbar" style={{width: "45%", ariaValueNow:"25", ariaValueMin:"0", ariaValueMax:"100"}}>45%</div>
                                    </div>
                                    </td>
                                    <td><Link to="" ><button className='btn btn-dark btn-sm  m-1'>Connect</button></Link></td>
                                </tr>
                                <tr>
                                    <td>Rahul</td>
                                    <td>Python Basics</td>
                                    <td>
                                    <div className="progress">
                                        <div className="progress-bar progress-bar-striped bg-success" role="progressbar" style={{width: "45%", ariaValueNow:"25", ariaValueMin:"0", ariaValueMax:"100"}}>45%</div>
                                    </div>
                                    </td>
                                    <td><Link to="" ><button className='btn btn-dark btn-sm m-1'>Connect</button></Link></td>
                                </tr>
                                <tr>
                                    <td>Rahul</td>
                                    <td>Python Basics</td>
                                    <td>
                                    <div className="progress">
                                        <div className="progress-bar progress-bar-striped bg-success" role="progressbar" style={{width: "45%", ariaValueNow:"25", ariaValueMin:"0", ariaValueMax:"100"}}>45%</div>
                                    </div>
                                    </td>
                                    <td><Link to="" ><button className='btn btn-dark btn-sm m-1'>Connect</button></Link></td>
                                </tr>
                                <tr>
                                    <td>Rahul</td>
                                    <td>Python Basics</td>
                                    <td>
                                    <div className="progress">
                                        <div className="progress-bar progress-bar-striped bg-success" role="progressbar" style={{width: "45%", ariaValueNow:"25", ariaValueMin:"0", ariaValueMax:"100"}}>45%</div>
                                    </div>
                                    </td>
                                    <td><Link to="" ><button className='btn btn-dark btn-sm m-1'>Connect</button></Link></td>
                                </tr>
                                
                            </tbody>

                        </table>
                      </div>
                  </div>
  </div>;
}

export default MyStudentsComponent;
