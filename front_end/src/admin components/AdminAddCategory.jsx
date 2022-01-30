import React from 'react';

function AdminCategory() {
  return <div>
     <div className="card">
                      <h3 className="card-header">Add Category</h3>
                      <div className="card-body">
                
                <div className="mb-3 row">
                    <label for="staticEmail" className="col-sm-2 col-form-label">Category Name</label>
                    <div className="col-sm-6">
                    <input type="text"  className="form-control-plaintext" id="staticEmail" placeholder="Enter Here"/>
                    </div>
                </div>
                <div className="mb-3 row">
                    <label for="staticEmail" className="col-sm-2 col-form-label">Description</label>
                    <div className="col-sm-6">
                    <textarea rows="3" type="text" readonly className="form-control-plaintext" id="staticEmail" placeholder="Enter Here"/>
                    </div>
                </div>
                
               <button className="btn btn-dark float-end">Submit</button>
                </div>
            </div>
  </div>;
}

export default AdminCategory;