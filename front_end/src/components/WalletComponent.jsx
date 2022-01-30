import React from 'react';
import {Link} from 'react-router-dom'
import  './DashboardComponent.css'
import WithdrawHistoryComponent from './WithdrawHistoryComponent'
function WalletComponent() {
  return <div>
            <div className="card">
                      <h3 className="card-header">Wallet</h3>
                      <div className="card-body">
                      
                      <br />
                <div className="row">
                <div className="col-md-8 col-12">
                        <h3>Linked Account Details</h3>
                <div className="mb-3 mt-5 row">
                    <label htmlFor="staticEmail" className="col-sm-2 col-form-label fw-bold">Account Holder</label>
                    <div className="col-sm-6">
                    <p className="col-sm-12 col-form-label">Sanin</p>
                    </div>
                </div>
                <div className="mb-3  row">
                    <label htmlFor="staticEmail" className="col-sm-2 col-form-label fw-bold">Bank Name</label>
                    <div className="col-sm-6">
                     <p className="col-sm-12 col-form-label">STATE BANK OF INDIA</p>
                    </div>
                </div>
                <div className="mb-3 row">
                    <label htmlFor="staticEmail" className="col-sm-2 col-form-label fw-bold">Account NO</label>
                    <div className="col-sm-6">
                    <p className="col-sm-12 col-form-label">20366820222</p>
                    </div>
                </div>
                <div className="mb-3 row">
                    <label htmlFor="staticEmail" className="col-sm-2 col-form-label fw-bold">IFSC Code</label>
                    <div className="col-sm-6">
                    <p className="col-sm-12 col-form-label">SBIN0002207</p>
                    </div>
                </div>
                    </div>
                    <div className="col-md-4 col-12">
                    
                        <div className="card">
                        <span className="text-center mt-2 float-end fw-bold">Available Balance</span>
                            <div className="card-body">

                                <div className="card-header text-center"><h4>₹2,500</h4></div>
                                

                            </div>
                            <div className="card-body">

                            <form class="row g-3">
                                    <div class="col-12">
                                        
                                        <h5>Add Money</h5>
                                    </div>
                                    <div class="col-auto">
                                    
                                        <label for="inputPassword2" class="visually-hidden">Enter Amount to Deposite</label>
                                        <input type="number" class="form-control" id="inputPassword2"  placeholder="Enter Amount"/>
                                    </div>
                                    <div class="col-auto">
                                        <button type="submit" class="btn btn-primary mb-3" >Deposit</button>
                                    </div>
                            </form>
                                
                            </div>
                            <div className="card-body">

                            <form class="row g-3">
                                    <div class="col-12">
                                        
                                        <h5>Withdraw Request</h5>
                                    </div>
                                    <div class="col-auto">
                                    
                                        <label for="inputPassword2" class="visually-hidden">Enter Amount to Withdraw</label>
                                        <input type="number" class="form-control" id="inputPassword2"  placeholder="Enter Amount"/>
                                    </div>
                                    <div class="col-auto">
                                        <button type="submit" class="btn btn-primary mb-3" >Withdraw</button>
                                    </div>
                            </form>
                                
                            </div>
                        </div>
                    </div>
                
                </div>

                      </div>
                  </div>
                  <div className="card">
                      <h3 className="card-header">History</h3>
                      <div className="card-body">
                      <br />
                <div className="row">
                            <WithdrawHistoryComponent/>
                   
                </div>

                      </div>
                  </div>
  </div>;
}

export default WalletComponent;
