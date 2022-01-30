import React from 'react';
import {Link} from 'react-router-dom'
function WithdrawHistoryComponent() {
  return <div>
      <div className="card">
                      
                      <div className="card-body">
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th>Date</th>
                                    <th>Amount</th>
                                    <th>Transaction</th>
                                    <th>Balance</th>
                                    
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>11/11/12</td>
                                    <td>₹300</td>
                                    <td>Credited</td>
                                    <td>₹1400</td>
                                </tr>
                                <tr>
                                    <td>11/11/12</td>
                                    <td>₹300</td>
                                    <td>Credited</td>
                                    <td>₹1400</td>
                                </tr>
                                <tr>
                                    <td>11/11/12</td>
                                    <td>₹300</td>
                                    <td>Credited</td>
                                    <td>₹1400</td>
                                </tr>
                                <tr>
                                    <td>11/11/12</td>
                                    <td>₹300</td>
                                    <td>Credited</td>
                                    <td>₹1400</td>
                                </tr>
                                
                            </tbody>

                        </table>
                      </div>
                  </div>
  </div>;
}

export default WithdrawHistoryComponent;
