import React from 'react';
import {Link} from 'react-router-dom'
import Swal from 'sweetalert2'

const SubmitReview = () => {
    Swal.fire({
        title: 'Give Rating',
        input: 'range',
        confirmButtonText: 'Submit',
        inputAttributes: {
          min: 1,
          max: 5,
          step: 1
        },
        inputValue: 5
      })
}

function EnrolledComponent() {

  return <div>
      <div className="card">
                      <h3 className="card-header">Enrolled Courses</h3>
                      <div className="card-body">
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th>Course Details</th>
                                    <th>Progress</th>
                                    <th>Get Support</th>
                                    <th>Review</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="text-center">
                                        <span className="fw-bold"> Python Basics </span>
                                        <br/>
                                         Author : <span className="fst-italic">Rahul</span>
                                         
                                    </td>
                                    <td>
                                    <div className="progress">
                                        <div className="progress-bar progress-bar-striped bg-success" role="progressbar" style={{width: "10%", ariaValueNow:"25", ariaValueMin:"0", ariaValueMax:"100"}}>10%</div>
                                    </div>
                                    </td>
                                    <td className="text-center"><Link to="" ><button className='btn btn-dark btn-sm  m-1'>Connect</button></Link></td>
                                    <td className="text-center"><Link to="" ><button onClick={SubmitReview} className='btn btn-dark btn-sm  m-1'>Review</button></Link></td>
                                
                                </tr>
                                <tr>
                                     <td className="text-center">
                                        <span className="fw-bold"> Python Basics </span>
                                    
                                    </td>
                                    <td>
                                    <div className="progress">
                                        <div className="progress-bar progress-bar-striped bg-success" role="progressbar" style={{width: "45%", ariaValueNow:"25", ariaValueMin:"0", ariaValueMax:"100"}}>45%</div>
                                    </div>
                                    </td>
                                    <td className="text-center"><Link to="" ><button className='btn btn-dark btn-sm m-1'>Connect</button></Link></td>
                                    <td className="text-center">4/5</td>
                                </tr>
                                <tr>
                                     <td className="text-center">
                                        <span className="fw-bold"> Python Basics </span>
                                    
                                        
                                    </td>
                                    <td>
                                    <div className="progress">
                                        <div className="progress-bar progress-bar-striped bg-success" role="progressbar" style={{width: "45%", ariaValueNow:"25", ariaValueMin:"0", ariaValueMax:"100"}}>45%</div>
                                    </div>
                                    </td>
                                    <td className="text-center"><Link to="" ><button className='btn btn-dark btn-sm m-1'>Connect</button></Link></td>
                                    <td className="text-center">4/5</td>
                                </tr>
                                <tr>
                                     <td className="text-center">
                                        <span className="fw-bold"> Python Basics </span>
                                    
                                        
                                    </td>
                                    <td>
                                    <div className="progress">
                                        <div className="progress-bar progress-bar-striped bg-success" role="progressbar" style={{width: "45%", ariaValueNow:"45", ariaValueMin:"0", ariaValueMax:"100"}}>45%</div>
                                    </div>
                                    </td>
                                    <td className="text-center"><Link to="" ><button className='btn btn-dark btn-sm m-1'>Connect</button></Link></td>
                                    <td className="text-center"><Link to="" ><button className='btn btn-dark btn-sm  m-1'>Review</button></Link></td>
                                
                                </tr>
                                
                            </tbody>

                        </table>
                      </div>
                  </div>
  </div>;
}

export default EnrolledComponent;
