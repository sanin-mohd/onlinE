import React from 'react';
import AdminHeader from '../admin components/AdminHeader';
import AdminSignIn from '../admin components/AdminSignIn'

function AdminLogin() {
  return <div>
       <AdminHeader/>
        <div className="container mt-5">
            <div className="row">
            <div className="col-12 mb-5">
                <AdminSignIn/>
                </div>
            </div>
        </div>
  </div>;
}

export default AdminLogin;
