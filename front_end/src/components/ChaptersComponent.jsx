import React from 'react';
import {Link} from 'react-router-dom'
function ChaptersComponent() {
  return <div>
              <div className="card">
                      <h3 className="card-header">Chapters <span className="float-end">Course Title</span> </h3>
                      <div className="card-body">
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th>Chapters</th>
                                    <th>Video</th>
                                    <th>Description</th>
                                    <th>Update</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody className="text-center">
                                <tr>
                                    <td>1</td>
                                    <td>
                                        
                                        <button className="btn btn-sm btn-dark float-end" data-bs-toggle="modal" data-bs-target="#exampleModal1">Python Introduction</button>
                                            {/* Video Modal */}
                                                    <div className="modal fade" id="exampleModal1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                    <div className="modal-dialog modal-xl">
                                                        <div className="modal-content">
                                                        <div className="modal-header">
                                                            <h5 className="modal-title" id="exampleModalLabel">Video Title</h5>
                                                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                        </div>
                                                        <div className="modal-body">
                                                        <div className="ratio ratio-16x9">
                                                                <iframe src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" title="YouTube video" allowfullscreen></iframe>
                                                        </div>
                                                        </div>
                                                        
                                                        </div>
                                                    </div>
                                                    </div>
                                            {/* End Video Modal */}
                                    </td>
                                    <td>This video helps you get basic knowledge about python programming</td>
                                    <td><p className='card btn btn-info text-dark text-decoration-none'>Update</p></td>
                                    <td><p className='card btn btn-danger text-decoration-none text-dark'>Delete</p></td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>
                                        
                                        <button className="btn btn-sm btn-dark float-end" data-bs-toggle="modal" data-bs-target="#exampleModal1">Python Introduction</button>
                                            {/* Video Modal */}
                                                    <div className="modal fade" id="exampleModal1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                    <div className="modal-dialog modal-xl">
                                                        <div className="modal-content">
                                                        <div className="modal-header">
                                                            <h5 className="modal-title" id="exampleModalLabel">Video Title</h5>
                                                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                        </div>
                                                        <div className="modal-body">
                                                        <div className="ratio ratio-16x9">
                                                                <iframe src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" title="YouTube video" allowfullscreen></iframe>
                                                        </div>
                                                        </div>
                                                        
                                                        </div>
                                                    </div>
                                                    </div>
                                            {/* End Video Modal */}
                                    </td>
                                    <td>This video helps you get basic knowledge about python programming</td>
                                    <td><p className='card btn btn-info text-dark text-decoration-none'>Update</p></td>
                                    <td><p className='card btn btn-danger text-decoration-none text-dark'>Delete</p></td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>
                                        
                                        <button className="btn btn-sm btn-dark float-end" data-bs-toggle="modal" data-bs-target="#exampleModal1">Python Introduction</button>
                                            {/* Video Modal */}
                                                    <div className="modal fade" id="exampleModal1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                    <div className="modal-dialog modal-xl">
                                                        <div className="modal-content">
                                                        <div className="modal-header">
                                                            <h5 className="modal-title" id="exampleModalLabel">Video Title</h5>
                                                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                        </div>
                                                        <div className="modal-body">
                                                        <div className="ratio ratio-16x9">
                                                                <iframe src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" title="YouTube video" allowfullscreen></iframe>
                                                        </div>
                                                        </div>
                                                        
                                                        </div>
                                                    </div>
                                                    </div>
                                            {/* End Video Modal */}
                                    </td>
                                    <td>This video helps you get basic knowledge about python programming</td>
                                    <td><p className='card btn btn-info text-dark text-decoration-none'>Update</p></td>
                                    <td><p className='card btn btn-danger text-decoration-none text-dark'>Delete</p></td>
                                </tr>
                                <tr>
                                    <td>4</td>
                                    <td>
                                        
                                        <button className="btn btn-sm btn-dark float-end" data-bs-toggle="modal" data-bs-target="#exampleModal1">Python Introduction</button>
                                            {/* Video Modal */}
                                                    <div className="modal fade" id="exampleModal1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                    <div className="modal-dialog modal-xl">
                                                        <div className="modal-content">
                                                        <div className="modal-header">
                                                            <h5 className="modal-title" id="exampleModalLabel">Video Title</h5>
                                                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                        </div>
                                                        <div className="modal-body">
                                                        <div className="ratio ratio-16x9">
                                                                <iframe src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" title="YouTube video" allowfullscreen></iframe>
                                                        </div>
                                                        </div>
                                                        
                                                        </div>
                                                    </div>
                                                    </div>
                                            {/* End Video Modal */}
                                    </td>
                                    <td>This video helps you get basic knowledge about python programming</td>
                                    <td><p className='card btn btn-info text-dark text-decoration-none'>Update</p></td>
                                    <td><p className='card btn btn-danger text-decoration-none text-dark'>Delete</p></td>
                                </tr>
                                
                                
                            </tbody>

                        </table>
                        
                        <div class="accordion accordion-flush" id="accordionFlushExample">
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="flush-headingOne">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                    Add More Chapters
                                </button>
                                </h2>
                                <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                <div className="card">
                                        
                                        <div className="card-body">
                                    <div className="mb-3 row">
                                        <label htmlFor="staticEmail" className="col-sm-2 col-form-label">Chapter No</label>
                                        <div className="col-sm-6">
                                        <input type="number"  className="form-control-plaintext" id="staticEmail" placeholder="Eg: 3"/>
                                        </div>
                                    </div>
                                    <div className="mb-3 row">
                                        <label htmlFor="staticEmail" className="col-sm-2 col-form-label">Chapter Title</label>
                                        <div className="col-sm-6">
                                        <input type="text"  className="form-control-plaintext" id="staticEmail" placeholder="Enter Here"/>
                                        </div>
                                    </div>
                                    <div className="mb-3 row">
                                        <label htmlFor="staticEmail" className="col-sm-2 col-form-label">Description</label>
                                        <div className="col-sm-6">
                                        <textarea rows="6" type="text" readonly className="form-control-plaintext" id="staticEmail" placeholder="Enter Here"/>
                                        </div>
                                    </div>
                                    <div className="mb-3 row">
                                        <label htmlFor="staticEmail" className="col-sm-2 col-form-label">Video</label>
                                        <div className="col-sm-6">
                                        <input type="file" readonly className="form-control-plaintext"/>
                                        </div>
                                    </div>
                                    
                                    
                                
                                <button className="btn btn-dark float-end">Submit</button>
                                    </div>
                                </div>
                                
                                
                                </div>
                            </div>
                            
                            </div>
                      </div>
                  </div>
  </div>;
}

export default ChaptersComponent;
