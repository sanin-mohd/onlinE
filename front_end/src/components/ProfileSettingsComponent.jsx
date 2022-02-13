import React from 'react';

function ProfileSettingsComponent() {
  return <div>
     <div className="card">
                      <h3 className="card-header">Profile Settings</h3>
                      <div className="card-body">
                
                <div className="mb-3 row">
                    <label htmlFor="staticEmail" className="col-sm-2 col-form-label">Username</label>
                    <div className="col-sm-6">
                    <input type="text"  className="form-control-plaintext" id="staticEmail" placeholder="sanin"/>
                    </div>
                </div>
                <div className="mb-3 row">
                    <label htmlFor="staticEmail" className="col-sm-2 col-form-label">Email</label>
                    <div className="col-sm-6">
                    <input type="text" readonly className="form-control-plaintext" id="staticEmail" placeholder="email@example.com"/>
                    </div>
                </div>
                <div className="mb-3 row">
                    <label htmlFor="staticEmail" className="col-sm-2 col-form-label">Contat</label>
                    <div className="col-sm-6">
                    <input type="text" readonly className="form-control-plaintext" id="staticEmail" placeholder="+91 8301868891"/>
                    </div>
                </div>
                <div className="mb-3 row">
                    <label htmlFor="staticEmail" className="col-sm-2 col-form-label">Profile Picture</label>
                    <div className="col-sm-6">
                    <input type="file" readonly className="form-control-plaintext" id="staticEmail" />
                    </div>
                </div>
                <div className="mb-3 row">
                    <label htmlFor="staticEmail" className="col-sm-2 col-form-label">Bio Details</label>
                    <div className="col-sm-6">
                    <textarea row="4" type="text" readonly className="form-control-plaintext" id="staticEmail" placeholder="Enter Here"/>
                    </div>
                </div>
                <div className="mb-3 row">
                    <label htmlFor="staticEmail" className="col-sm-2 col-form-label">Interests</label>
                    <div className="col-sm-6">
                    <textarea row="4" type="text" readonly className="form-control-plaintext" id="staticEmail" placeholder="Python, React, Java..."/>
                    </div>
                </div>
                <h5 className='card-header'>Bank Datails</h5>
                <div className="mb-3 row">
                    <label htmlFor="staticEmail" className="col-sm-2 col-form-label">Account Holder</label>
                    <div className="col-sm-10">
                    <input type="text" readonly className="form-control-plaintext" id="staticEmail" placeholder="Sanin"/>
                    </div>
                </div>
                <div className="mb-3 row">
                    <label htmlFor="staticEmail" className="col-sm-2 col-form-label">Bank Name</label>
                    <div className="col-sm-10">
                    <input type="text" readonly className="form-control-plaintext" id="staticEmail" placeholder="STATE BANK OF INDIA"/>
                    </div>
                </div>
                <div className="mb-3 row">
                    <label htmlFor="staticEmail" className="col-sm-2 col-form-label">Acc Number</label>
                    <div className="col-sm-10">
                    <input type="text" readonly className="form-control-plaintext" id="staticEmail" placeholder="20366820222"/>
                    </div>
                </div>
                <div className="mb-3 row">
                    <label htmlFor="staticEmail" className="col-sm-2 col-form-label">IFSC Code</label>
                    <div className="col-sm-10">
                    <input type="text" readonly className="form-control-plaintext" id="staticEmail" placeholder="SBIN0002207"/>
                    </div>
                </div>
               <button className="btn btn-dark float-end col-12">Update</button>
                </div>
            </div>
  </div>;
}

export default ProfileSettingsComponent;
