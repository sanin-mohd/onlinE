import React from 'react';
import {Link} from 'react-router-dom'
import { Bar } from "react-chartjs-2";
import AdminChartCourses from './AdminChartCourses'
import AdminChartUsers from './AdminChartUsers'
function AdminDashboardComponent() {
  return <div>
            <div className="card">
                      <h3 className="card-header">User Statistics <span className="float-end fw-bold card p-1">Total Users : 154 </span> </h3>
                      <div className="card-body">
                <div className="row">
                    
                <AdminChartUsers/>
                </div>

                      </div>
                  </div>
                  <div className="card">
                      <h3 className="card-header">Course Statistics </h3>
                      <div className="card-body">
                      <br />
                <div className="row">
                            <AdminChartCourses/>
                   
                </div>

                      </div>
                  </div>
  </div>;
}

export default AdminDashboardComponent;
