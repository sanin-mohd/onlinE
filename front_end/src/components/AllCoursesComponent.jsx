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
          </div>
        </div>
        <div className=" col-12 col-md-6 col-lg-4 mt-4">
          <div className="card m-auto" style={{ width: "18rem" }}>
            <a href="#" style={{ margin:'auto'}}><img style={{ height: "200px",width: "200px"}}src="logo512.png" className="card-img-top" alt="..." />
            </a>
            <div className="card-body">
              <a href="#" className="card-title">Card title</a>
              
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
          </div>
        </div>
        <div className=" col-12 col-md-6 col-lg-4 mt-4">
          <div className="card m-auto" style={{ width: "18rem" }}>
            <a href="#" style={{ margin:'auto'}}><img style={{ height: "200px",width: "200px"}}src="logo512.png" className="card-img-top" alt="..." />
            </a>
            <div className="card-body">
              <a href="#" className="card-title">Card title</a>
              
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
          </div>
        </div>

        
        <div className=" col-12 col-md-6 col-lg-4 mt-4">
          <div className="card m-auto" style={{ width: "18rem" }}>
            <a href="#" style={{ margin:'auto'}}><img style={{ height: "200px",width: "200px"}}src="logo512.png" className="card-img-top" alt="..." />
            </a>
            <div className="card-body">
              <a href="#" className="card-title">Card title</a>
              
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
          </div>
        </div>
        <div className=" col-12 col-md-6 col-lg-4 mt-4">
          <div className="card m-auto" style={{ width: "18rem" }}>
            <a href="#" style={{ margin:'auto'}}><img style={{ height: "200px",width: "200px"}}src="logo512.png" className="card-img-top" alt="..." />
            </a>
            <div className="card-body">
              <a href="#" className="card-title">Card title</a>
              
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
          </div>
        </div>
      </div>
     
    </div>

    </div>
    
  );
}

export default AllCoursesComponent;
