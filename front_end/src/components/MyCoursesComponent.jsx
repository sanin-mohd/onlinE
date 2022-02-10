import {React,useEffect,useState,useContext} from 'react';
import {Link} from 'react-router-dom'
import AuthContext from '../AuthContext'
import {getUsercourses} from '../user axios functions/Axios'


function MyCoursesComponent() {
    const {authToken,user} = useContext(AuthContext)
    const [courses, setCourses] = useState([]);


    useEffect(() => {
        getUsercourses().then((courses) => {
            setCourses(courses)
            courses.forEach((course) =>{
                console.log(course.title);
            })
        })
    },[])
  return <div>
              <div className="card">
                      <h3 className="card-header">My Courses</h3>
                      <div className="card-body">
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th>Course Title</th>
                                    <th>Enrolled Students</th>
                                    <th>Pricing</th>
                                    <th>Revenue</th>
                                    <th>Rating</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    courses.map((course,index) => {
                                        return (
                                            
                                            <tr key={index} className="text-center">
                                            <td> 
                                                
                                                <Link to={`chapters/${course.id}`} >
                                                <img src={course.thumbnail} style={{width: 200}}/> <br />
                                                    {course.title}
                                                    </Link>
                                            </td>
                                            <td>{course.enrolled_students}</td>
                                            <td>₹ {course.price}</td>
                                            <td>₹ {(course.enrolled_students*course.price)}</td>
                                            <td>4/5</td>
                                        </tr>
                                        )
                                    })
                                }
                                
                                
                                
                            </tbody>

                        </table>
                      </div>
                  </div>
  </div>;
}

export default MyCoursesComponent;
