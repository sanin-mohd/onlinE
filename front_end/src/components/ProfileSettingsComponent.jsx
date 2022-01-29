import React from 'react';

function ProfileSettingsComponent() {
  return <div>
     <div className="card">
                      <h3 className="card-header">Profile Settings</h3>
                      <div className="card-body">
                
                <div class="mb-3 row">
                    <label for="staticEmail" class="col-sm-2 col-form-label">Username</label>
                    <div class="col-sm-6">
                    <input type="text"  class="form-control-plaintext" id="staticEmail" placeholder="sanin"/>
                    </div>
                </div>
                <div class="mb-3 row">
                    <label for="staticEmail" class="col-sm-2 col-form-label">Email</label>
                    <div class="col-sm-6">
                    <input type="text" readonly class="form-control-plaintext" id="staticEmail" placeholder="email@example.com"/>
                    </div>
                </div>
                <div class="mb-3 row">
                    <label for="staticEmail" class="col-sm-2 col-form-label">Contat</label>
                    <div class="col-sm-6">
                    <input type="text" readonly class="form-control-plaintext" id="staticEmail" placeholder="+91 8301868891"/>
                    </div>
                </div>
                <div class="mb-3 row">
                    <label for="staticEmail" class="col-sm-2 col-form-label">Profile Picture</label>
                    <div class="col-sm-6">
                    <input type="file" readonly class="form-control-plaintext" id="staticEmail" />
                    </div>
                </div>
                <h5 className='card-header'>Bank Datails</h5>
                <div class="mb-3 row">
                    <label for="staticEmail" class="col-sm-2 col-form-label">Bank Name</label>
                    <div class="col-sm-10">
                    <input type="text" readonly class="form-control-plaintext" id="staticEmail" placeholder="STATE BANK OF INDIA"/>
                    </div>
                </div>
                <div class="mb-3 row">
                    <label for="staticEmail" class="col-sm-2 col-form-label">Acc Number</label>
                    <div class="col-sm-10">
                    <input type="text" readonly class="form-control-plaintext" id="staticEmail" placeholder="20366820222"/>
                    </div>
                </div>
                <div class="mb-3 row">
                    <label for="staticEmail" class="col-sm-2 col-form-label">IFSC Code</label>
                    <div class="col-sm-10">
                    <input type="text" readonly class="form-control-plaintext" id="staticEmail" placeholder="SBIN0002207"/>
                    </div>
                </div>
               <button className="btn btn-dark float-end">Update</button>
                </div>
            </div>
  </div>;
}

export default ProfileSettingsComponent;
