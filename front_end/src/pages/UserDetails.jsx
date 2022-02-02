import {React,useEffect} from 'react';
import {useParams,Link} from 'react-router-dom'
import YouTubeIcon from '@mui/icons-material/YouTube';
import Header from '../components/Header';
import Footer from '../components/Footer';

function UserDetails() {
  useEffect(() => {
    document.title="Creator Details"
   
  });
  let {course_id}=useParams()
  return <div className="">
     <Header/>
     <div className="container mt-5">
      <div className="row">
        <div className="col-3">
        <div className="card " style={{ width: "18rem" }}>
            <p to="/details/1" style={{ margin:'auto'}}><img style={{ height: "250px",width: "250px"}} src="/avatar.png" className="card-img-top" alt="..." />
            </p>
            <div className="card-body">
              <p style={{textDecoration:"None"}} to="/details/1" className="card-title">Author Name</p>
            </div>
          </div>
        </div>
        <div className="col-9">
          <h1>Author Details <span className="float-end fs-5 btn btn-light" style={{cursor: "default"}}>Total Courses : 12</span> </h1>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio iusto odit accusamus doloribus eius atque blanditiis, vero incidunt alias tenetur error eligendi nulla voluptatibus aut quidem. Voluptas delectus aliquid assumenda omnis eum, error autem soluta magnam quibusdam atque excepturi laborum ab temporibus obcaecati qui quae! Nisi autem hic corrupti cumque itaque modi corporis nihil! Perspiciatis, quis? Corrupti adipisci, dolorum, minus magnam minima iste saepe tempora blanditiis asperiores, enim autem consectetur aspernatur dolorem. Aspernatur esse facere odio tenetur harum, alias quam neque, quidem doloremque incidunt, laudantium laborum adipisci. Odio temporibus pariatur nulla fugit? Veniam praesentium voluptatum odit libero rem, perspiciatis ipsa!</p>
          <p><b>Joined Date : </b>12/12/12</p>
          <p><b>Interests : </b>Python, Java, React.js, Node.js</p>
          <p><b>Total Students : </b>123 Students</p>
          
          
        </div>
      </div>
      
      <h3 className="border-bottom pd-1 mt-5">Created Courses</h3>
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

export default UserDetails;
