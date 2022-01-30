import React from 'react';
import {Link} from 'react-router-dom'
import  './DashboardComponent.css'
import WithdrawHistoryComponent from './WithdrawHistoryComponent'
import MessengerWindow from './MessengerWindow';
function MessengerComponent() {
  return <div>
            <div className="card">
                      <h3 className="card-header">Messenger</h3>
                      <div className="card-body">
                      
                      <br />
                <div className="row">
               
                    <div className="col-md-4 col-12">
                    
                        <div className="card">
                        <h6 className="text-center card-header text-white bg-dark  float-end fw-bold">Available chats</h6>
                            <div className="card-body">
                                <div className="card-header text-center"><span>Creator 1</span></div>
                            </div>
                            <div className="card-body">
                                <div className="card-header text-center"><span>Creator 1</span></div>
                            </div>
                            <div className="card-body">
                                <div className="card-header text-center"><span>Creator 1</span></div>
                            </div>
                            <div className="card-body">
                                <div className="card-header text-center"><span>Creator 1</span></div>
                            </div>
                            <div className="card-body">
                                <div className="card-header text-center"><span>Creator 1</span></div>
                                
                            </div>
                            
                           
                        </div>
                    </div>
                    <div className="col-md-8 col-12">
                       <MessengerWindow/>
                    </div>
                
                </div>

                      </div>
                  </div>

  </div>;
}

export default MessengerComponent;
