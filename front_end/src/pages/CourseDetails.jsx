import React from 'react';
import {useParams,Link} from 'react-router-dom'
import YouTubeIcon from '@mui/icons-material/YouTube';
import Header from '../components/Header';
import Footer from '../components/Footer';

function CorseDetails() {
  let {course_id}=useParams()
  return <div className="">
     <Header/>
     <div className="container mt-5">
      <div className="row">
        <div className="col-3">
        <div className="card " style={{ width: "18rem" }}>
            <Link to="/details/1" style={{ margin:'auto'}}><img style={{ height: "250px",width: "250px"}} src="/logo512.png" className="card-img-top" alt="..." />
            </Link>
            <div className="card-body">
              <Link style={{textDecoration:"None"}} to="/details/1" className="card-title">Card title</Link>
            </div>
          </div>
        </div>
        <div className="col-9">
          <h1>Course Title <span className="float-end fs-5 btn btn-light" style={{cursor: "default"}}>FREE / ₹499</span> </h1>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio iusto odit accusamus doloribus eius atque blanditiis, vero incidunt alias tenetur error eligendi nulla voluptatibus aut quidem. Voluptas delectus aliquid assumenda omnis eum, error autem soluta magnam quibusdam atque excepturi laborum ab temporibus obcaecati qui quae! Nisi autem hic corrupti cumque itaque modi corporis nihil! Perspiciatis, quis? Corrupti adipisci, dolorum, minus magnam minima iste saepe tempora blanditiis asperiores, enim autem consectetur aspernatur dolorem. Aspernatur esse facere odio tenetur harum, alias quam neque, quidem doloremque incidunt, laudantium laborum adipisci. Odio temporibus pariatur nulla fugit? Veniam praesentium voluptatum odit libero rem, perspiciatis ipsa!</p>
          <p><b>Created by        : </b><a href="#" style={{textDecoration:"None"}}>Sanin_mohd</a> 12/12/12</p>
          <p><b>Duration          : </b>3 Hours</p>
          <p><b>Enrolled Students : </b>123 Students</p>
          <button className="btn btn-primary float-end">Enroll Now</button>
          
        </div>
      </div>
      <div class="card mt-5" >
        <div class="card-header">
          Play List
        </div>
        <ul class="list-group list-group-flush ">
          <li class="list-group-item ">1.  Introduction<span className="float-end me-3"><span className="m-auto">10 Minutes</span><button class="btn btn-sm float-end"><YouTubeIcon/></button></span> </li>
          <li class="list-group-item">2. Project Setup<span className="float-end me-3"><span className="m-auto">10 Minutes</span><button class="btn btn-sm float-end"><YouTubeIcon/></button></span> </li>
          <li class="list-group-item">3. Video 1<span className="float-end me-3"><span className="m-auto">10 Minutes</span><button class="btn btn-sm float-end"><YouTubeIcon/></button></span> </li>
          <li class="list-group-item ">4.  Introduction<span className="float-end me-3"><span className="m-auto">10 Minutes</span><button class="btn btn-sm float-end"><YouTubeIcon/></button></span> </li>
          <li class="list-group-item">5. Project Setup<span className="float-end me-3"><span className="m-auto">10 Minutes</span><button class="btn btn-sm float-end"><YouTubeIcon/></button></span> </li>
          <li class="list-group-item">6. Video 1<span className="float-end me-3"><span className="m-auto">10 Minutes</span><button class="btn btn-sm float-end"><YouTubeIcon/></button></span> </li>
        
        </ul>
      </div>
      <h3 className="border-bottom pd-1 mt-5">Related Courses </h3>
      <div className="row">
        <div className=" col-12 col-md-6 col-lg-3 mt-4">
          <div className="card m-auto" style={{ width: "18rem" }}>
            <a href="#" style={{ margin:'auto'}}><img style={{ height: "200px",width: "200px"}}src="/logo512.png" className="card-img-top" alt="..." />
            </a>
            <div className="card-body">
              <a href="#" className="card-title">Card title</a>
              
            </div>
          </div>
        </div>

        <div className=" col-12 col-md-6 col-lg-3 mt-4">
          <div className="card m-auto" style={{ width: "18rem" }}>
            <a href="#" style={{ margin:'auto'}}><img style={{ height: "200px",width: "200px"}}src="/logo512.png" className="card-img-top" alt="..." />
            </a>
            <div className="card-body">
              <a href="#" className="card-title">Card title</a>
              
            </div>
          </div>
        </div>

        <div className=" col-12 col-md-6 col-lg-3 mt-4">
          <div className="card m-auto" style={{ width: "18rem" }}>
            <a href="#" style={{ margin:'auto'}}><img style={{ height: "200px",width: "200px"}}src="/logo512.png" className="card-img-top" alt="..." />
            </a>
            <div className="card-body">
              <a href="#" className="card-title">Card title</a>
              
            </div>
          </div>
        </div>

        <div className=" col-12 col-md-6 col-lg-3 mt-4">
          <div className="card m-auto" style={{ width: "18rem" }}>
            <a href="#" style={{ margin:'auto'}}><img style={{ height: "200px",width: "200px"}}src="/logo512.png" className="card-img-top" alt="..." />
            </a>
            <div className="card-body">
              <a href="#" className="card-title">Card title</a>
              
            </div>
          </div>
        </div>

        
      </div>
      

  </div>;

     <Footer/>
  </div>
  
}

export default CorseDetails;
