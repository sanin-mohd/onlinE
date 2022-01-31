import React from 'react';
import {useParams,Link} from 'react-router-dom'
import YouTubeIcon from '@mui/icons-material/YouTube';
import Header from '../components/Header';
import Footer from '../components/Footer';

function CourseDetails() {
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
          <p><b>Created by        : </b><Link to="/user_details/1" style={{textDecoration:"None"}}>Sanin_mohd</Link> 12/12/12</p>
          <p><b>Duration          : </b>3 Hours</p>
          <p><b>Enrolled Students : </b>123 Students</p>
          <button className="btn btn-primary float-end">Enroll Now</button>
          
        </div>
      </div>
      <div className="card mt-5" >
        <div className="card-header">
          Play List
        </div>
        <ul className="list-group list-group-flush ">
          <li className="list-group-item ">
            1.  Introduction
            <span className="float-end me-3">
              <span className="m-auto">10 Minutes</span>
              <button className="btn btn-sm float-end" data-bs-toggle="modal" data-bs-target="#exampleModal1"><YouTubeIcon/></button>
             {/* Video Modal */}
                    <div className="modal fade" id="exampleModal1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                      <div className="modal-dialog modal-xl">
                        <div className="modal-content">
                          <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Video Title</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                          </div>
                          <div className="modal-body">
                          <div class="ratio ratio-16x9">
                                <iframe src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" title="YouTube video" allowfullscreen></iframe>
                          </div>
                          </div>
                          
                        </div>
                      </div>
                    </div>
              {/* End Video Modal */}
            </span> 
          </li>
          <li className="list-group-item">2. Project Setup<span className="float-end me-3"><span className="m-auto">10 Minutes</span><button className="btn btn-sm float-end"><YouTubeIcon/></button></span> </li>
          <li className="list-group-item">3. Video 1<span className="float-end me-3"><span className="m-auto">10 Minutes</span><button className="btn btn-sm float-end"><YouTubeIcon/></button></span> </li>
          <li className="list-group-item ">4.  Introduction<span className="float-end me-3"><span className="m-auto">10 Minutes</span><button className="btn btn-sm float-end"><YouTubeIcon/></button></span> </li>
          <li className="list-group-item">5. Project Setup<span className="float-end me-3"><span className="m-auto">10 Minutes</span><button className="btn btn-sm float-end"><YouTubeIcon/></button></span> </li>
          <li className="list-group-item">6. Video 1<span className="float-end me-3"><span className="m-auto">10 Minutes</span><button className="btn btn-sm float-end"><YouTubeIcon/></button></span> </li>
        
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

export default CourseDetails;
