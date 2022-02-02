import React from "react";
import {Link} from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

function AllCoursesComponent() {
  return (
    <div className="">
      <div className="container">
        <h3 className="border-bottom pd-1 mt-5">Courses For You  </h3>
      <div className="row">
        <div className=" col-12 col-md-6 col-lg-4 mt-4">
          <div className="card">
            <Link to="/details/1" style={{ margin:'auto'}}><img style={{ height: "200px",width: "200px"}} src="logo512.png" className="card-img-top" alt="..." />
            </Link>
            <div className="card-body">
              <Link to="/details/1" className="card-title">Card title</Link>
             
            </div>
          
              <div className="card-footer">
                <span>Rating : 4.5/5</span>
                <span className="float-end fs-6">Views : 1234</span>
              </div>
          </div>
        </div>
        <div className=" col-12 col-md-6 col-lg-4 mt-4">
          <div className="card m-auto" style={{ width: "18rem" }}>
            <a href="#" style={{ margin:'auto'}}><img style={{ height: "200px",width: "200px"}}src="logo512.png" className="card-img-top" alt="..." />
            </a>
            <div className="card-body">
              <a href="#" className="card-title">Card title</a>
              
            </div>
            <div className="card-footer">
                <span>Rating : 4.5/5</span>
                <span className="float-end fs-6">Views : 1234</span>
              </div>
          </div>
        </div>

        <div className=" col-12 col-md-6 col-lg-4 mt-4">
          <div className="card m-auto" style={{ width: "18rem" }}>
            <a href="#" style={{ margin:'auto'}}><img style={{ height: "200px",width: "200px"}}src="logo512.png" className="card-img-top" alt="..." />
            </a>
            <div className="card-body">
              <a href="#" className="card-title">Card title</a>
              
            </div>
            <div className="card-footer">
                <span>Rating : 4.5/5</span>
                <span className="float-end fs-6">Views : 1234</span>
              </div>
          </div>
        </div>
        <div className=" col-12 col-md-6 col-lg-4 mt-4">
          <div className="card m-auto" style={{ width: "18rem" }}>
            <a href="#" style={{ margin:'auto'}}><img style={{ height: "200px",width: "200px"}}src="logo512.png" className="card-img-top" alt="..." />
            </a>
            <div className="card-body">
              <a href="#" className="card-title">Card title</a>
              
            </div>
            <div className="card-footer">
                <span>Rating : 4.5/5</span>
                <span className="float-end fs-6">Views : 1234</span>
              </div>
          </div>
        </div>
        <div className=" col-12 col-md-6 col-lg-4 mt-4">
          <div className="card m-auto" style={{ width: "18rem" }}>
            <a href="#" style={{ margin:'auto'}}><img style={{ height: "200px",width: "200px"}}src="logo512.png" className="card-img-top" alt="..." />
            </a>
            <div className="card-body">
              <a href="#" className="card-title">Card title</a>
              
            </div>
            <div className="card-footer">
                <span>Rating : 4.5/5</span>
                <span className="float-end fs-6">Views : 1234</span>
              </div>
          </div>
        </div>

        
        <div className=" col-12 col-md-6 col-lg-4 mt-4">
          <div className="card m-auto" style={{ width: "18rem" }}>
            <a href="#" style={{ margin:'auto'}}><img style={{ height: "200px",width: "200px"}}src="logo512.png" className="card-img-top" alt="..." />
            </a>
            <div className="card-body">
              <a href="#" className="card-title">Card title</a>
              
            </div>
            <div className="card-footer">
                <span>Rating : 4.5/5</span>
                <span className="float-end fs-6">Views : 1234</span>
              </div>
          </div>
        </div>
        <div className=" col-12 col-md-6 col-lg-4 mt-4">
          <div className="card m-auto" style={{ width: "18rem" }}>
            <a href="#" style={{ margin:'auto'}}><img style={{ height: "200px",width: "200px"}}src="logo512.png" className="card-img-top" alt="..." />
            </a>
            <div className="card-body">
              <a href="#" className="card-title">Card title</a>
              
            </div>
            <div className="card-footer">
                <span>Rating : 4.5/5</span>
                <span className="float-end fs-6">Views : 1234</span>
              </div>
          </div>
        </div>
        <div className=" col-12 col-md-6 col-lg-4 mt-4">
          <div className="card m-auto" style={{ width: "18rem" }}>
            <a href="#" style={{ margin:'auto'}}><img style={{ height: "200px",width: "200px"}}src="logo512.png" className="card-img-top" alt="..." />
            </a>
            <div className="card-body">
              <a href="#" className="card-title">Card title</a>
              
            </div>
            <div className="card-footer">
                <span>Rating : 4.5/5</span>
                <span className="float-end fs-6">Views : 1234</span>
              </div>
          </div>
        </div>
        <div className=" col-12 col-md-6 col-lg-4 mt-4">
          <div className="card m-auto" style={{ width: "18rem" }}>
            <a href="#" style={{ margin:'auto'}}><img style={{ height: "200px",width: "200px"}}src="logo512.png" className="card-img-top" alt="..." />
            </a>
            <div className="card-body">
              <a href="#" className="card-title">Card title</a>
              
            </div>
            <div className="card-footer">
                <span>Rating : 4.5/5</span>
                <span className="float-end fs-6">Views : 1234</span>
              </div>
          </div>
        </div>
      </div>
     
    </div>
<nav aria-label="Page navigation example ">
  <ul className="pagination m-5 float-end">
    <li className="page-item"><a className="page-link" href="#">Previous</a></li>
    <li className="page-item"><a className="page-link" href="#">1</a></li>
    <li className="page-item"><a className="page-link" href="#">2</a></li>
    <li className="page-item"><a className="page-link" href="#">3</a></li>
    <li className="page-item"><a className="page-link" href="#">Next</a></li>
  </ul>
</nav>

    </div>
    
  );
}

export default AllCoursesComponent;
