import {React,useContext} from 'react';
import {Link} from 'react-router-dom'
import  './DashboardComponent.css'
import { Bar } from "react-chartjs-2";
import UserChart from './UserChart'
import AuthContext from '../AuthContext'
import {useSelector,useDispatch} from 'react-redux'
import {localhost} from '../BaseUrl'

function DashboardComponent() {
    const {authToken,user} = useContext(AuthContext)
    const userdata = useSelector(state => state.user_data.value)

  return <div>
            <div className="card">
                      <h3 className="card-header">My Dashboard </h3>
                      <div className="card-body">
                      <span className="float-end fw-bold">Balance : ₹{userdata.wallet_balance}</span> 
                      <br />
                <div className="row">
                    <div className="col-md-3">
                        <img className="avatar" src={localhost+userdata.dp} alt="Not Available" />

                    </div>
                    <div className="col-md-9">
                    <div className="mb-3 row">
                    <label htmlFor="staticEmail" className="col-sm-2 col-form-label">Username</label>
                    <div className="col-sm-6">
                     <p className="col-sm-12 col-form-label">{userdata.username}</p>
                    </div>
                </div>
                <div className="mb-3 row">
                    <label htmlFor="staticEmail" className="col-sm-2 col-form-label">Email</label>
                    <div className="col-sm-6">
                    <p className="col-sm-12 col-form-label">{userdata.email}</p>
                    </div>
                </div>
                <div className="mb-3 row">
                    <label htmlFor="staticEmail" className="col-sm-2 col-form-label">Contat</label>
                    <div className="col-sm-6">
                    <p className="col-sm-12 col-form-label">+91 {userdata.mobile}</p>
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
