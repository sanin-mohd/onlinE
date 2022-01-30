import React from 'react';

function AddCourseComponent() {
  return <div>
     <div className="card">
                      <h3 className="card-header">Add Course</h3>
                      <div className="card-body">
                
                <div className="mb-3 row">
                    <label for="staticEmail" className="col-sm-2 col-form-label">Course Title</label>
                    <div className="col-sm-6">
                    <input type="text"  className="form-control-plaintext" id="staticEmail" placeholder="Enter Here"/>
                    </div>
                </div>
                <div className="mb-3 row">
                    <label for="staticEmail" className="col-sm-2 col-form-label">Description</label>
                    <div className="col-sm-6">
                    <textarea rows="6" type="text" readonly className="form-control-plaintext" id="staticEmail" placeholder="Enter Here"/>
                    </div>
                </div>
                <div className="mb-3 row">
                    <label for="staticEmail" className="col-sm-2 col-form-label">Video</label>
                    <div className="col-sm-6">
                    <input type="file" readonly className="form-control-plaintext"/>
                    </div>
                </div>
                <div className="mb-3 row">
                    <label for="staticEmail" className="col-sm-2 col-form-label">Technologies Used</label>
                    <div className="col-sm-6">
                    <textarea rows="4" type="text" readonly className="form-control-plaintext" id="staticEmail" placeholder="Django,React.js,RESTful API..."/>
                    </div>
                </div>
                
               
               <button className="btn btn-dark float-end">Submit</button>
                </div>
            </div>
  </div>;
}

export default AddCourseComponent;
