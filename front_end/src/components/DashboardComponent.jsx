import {React,useContext} from 'react';
import {Link} from 'react-router-dom'
import  './DashboardComponent.css'
import { Bar } from "react-chartjs-2";
import UserChart from './UserChart'
import AuthContext from '../AuthContext'

function DashboardComponent() {
    const {authToken,user} = useContext(AuthContext)
  return <div>
            <div className="card">
                      <h3 className="card-header">My Dashboard </h3>
                      <div className="card-body">
                      <span className="float-end fw-bold">Balance : ₹{user.wallet_balance}</span> 
                      <br />
                <div className="row">
                    <div className="col-md-3">
                        <img className="avatar" src={user.dp} alt="" />

                    </div>
                    <div className="col-md-9">
                    <div className="mb-3 row">
                    <label htmlFor="staticEmail" className="col-sm-2 col-form-label">Username</label>
                    <div className="col-sm-6">
                     <p className="col-sm-12 col-form-label">{user.username}</p>
                    </div>
                </div>
                <div className="mb-3 row">
                    <label htmlFor="staticEmail" className="col-sm-2 col-form-label">Email</label>
                    <div className="col-sm-6">
                    <p className="col-sm-12 col-form-label">{user.email}</p>
                    </div>
                </div>
                <div className="mb-3 row">
                    <label htmlFor="staticEmail" className="col-sm-2 col-form-label">Contat</label>
                    <div className="col-sm-6">
                    <p className="col-sm-12 col-form-label">+91 {user.mobile}</p>
                    </div>
                </div>
                    </div>
                </div>

                      </div>
                  </div>
                  <div className="card">
                      <h3 className="card-header">Course Statistics </h3>
                      <div className="card-body">
                      <br />
                <div className="row">
                            <UserChart/>
                   
                </div>

                      </div>
                  </div>
  </div>;
}

export default DashboardComponent;
