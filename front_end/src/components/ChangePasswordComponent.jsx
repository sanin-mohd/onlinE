import React from 'react';

function ChangePasswordComponent() {
  return <div>
         <div className="card">
                      <h3 className="card-header">Change Password</h3>
                      <div className="card-body">
                <div className="mb-3 row">
                    <label htmlFor="staticEmail" className="col-sm-2 col-form-label">Current Password</label>
                    <div className="col-sm-10">
                    <input type="password"  className="form-control-plaintext" id="staticEmail" placeholder="************"/>
                    </div>
                </div>
                <div className="mb-3 row">
                    <label htmlFor="staticEmail" className="col-sm-2 col-form-label">New Password</label>
                    <div className="col-sm-10">
                    <input type="password" readonly className="form-control-plaintext" id="staticEmail" placeholder="************"/>
                    </div>
                </div>
                <div className="mb-3 row">
                    <label htmlFor="staticEmail" className="col-sm-2 col-form-label">Confirm Password</label>
                    <div className="col-sm-10">
                    <input type="password" readonly className="form-control-plaintext" id="staticEmail" placeholder="************"/>
                    </div>
                </div>
               
               <button className="btn btn-dark float-end">Update</button>
                </div>
            </div>

  </div>;
}

export default ChangePasswordComponent;
