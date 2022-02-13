import {React,useEffect,useState} from "react";
import {Link} from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import {Allcourses} from '../user axios functions/Axios'
function Home() {
  const [all_courses, setAll_courses] = useState(null)
  // useEffect(() => {
  //   Allcourses().then((res) =>{
  //     setAll_courses(res)
  //     res.map((course) =>{
  //       return console.log(course.title);
  //   })
  //   })
    


  //   document.title="Home Page"
   
  // },[]);
useEffect(() => {
  Allcourses().then((res) =>{
        setAll_courses(res)
        res.map((course) =>{
          return console.log(course.title);
      })
      })

  return () => {
    console.log("--------------------------");
  }
}, [])

  
  return (
    <div className="">
      <Header/>
      <div className="container">
        <h3 className="border-bottom pd-1 mt-5">Courses For You<Link to="/all_courses" className="float-end btn btn-dark" style={{fontSize:'15px'}} href="#">See All</Link> </h3>
      <div className="row">
        { all_courses &&
          all_courses.map((course,index)=>{
            return (
              <div className=" col-12 col-md-6 col-lg-3 mt-4">
              <div className="card m-auto" style={{ width: "18rem" }}>
                <Link to={`/details/${course.id}`} style={{ margin:'auto'}}><img style={{ height: "200px",width: "200px"}}src={course.thumbnail}className="card-img-top" alt="..." />
                </Link>
                <div className="card-body">
                  <Link to={`/details/${course.id}`}  className="card-title">{course.title}</Link>
                </div>
                <div className="card-footer">
                    <span>Rating : 4.5/5</span>
                    <span className="float-end fs-6">Enrolled Students: {course.enrolled_students}</span>
                  </div>
              </div>
            </div>

            )
          })
        }
      </div>
      <h3 className="border-bottom pd-1 mt-5">Popular Courses <Link to="/all_courses" className="float-end btn btn-dark" style={{fontSize:'15px'}} href="#">See All</Link></h3>
      <div className="row">
        <div className=" col-12 col-md-6 col-lg-3 mt-4">
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

        <div className=" col-12 col-md-6 col-lg-3 mt-4">
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

        <div className=" col-12 col-md-6 col-lg-3 mt-4">
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

        <div className=" col-12 col-md-6 col-lg-3 mt-4">
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
    <Footer/>
    </div>
    
  );
}

export default Home;
