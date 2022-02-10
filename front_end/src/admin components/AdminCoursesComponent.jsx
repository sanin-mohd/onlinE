import {React,useState,useEffect} from 'react';
import {Link} from 'react-router-dom'
import {getAllcourses} from '../admin axios functions/Axios'
function AdminCoursesComponent() {
    const [courses, setCourses] = useState('');
    useEffect(() => {
        getAllcourses().then((res)=>{
            setCourses(res)
        })
        
    },[])
  return <div>
              <div className="card">
                      <h3 className="card-header">Courses</h3>
                      <div className="card-body">
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th>Course Title</th>
                                    <th>Creator</th>
                                    <th>Enrolled Students</th>
                                    <th>Pricing</th>
                                    <th>Revenue</th>
                                    <th>Rating</th>
                                </tr>
                            </thead>
                            <tbody>
                                {courses && courses.map((course,index) =>{
                                    return (
                                        <tr key={index} className="text-center">
                                    <td>{course.title}</td>
                                    <td>{course.creator.email}</td>
                                    <td>{course.enrolled_students}</td>
                                    <td>₹ {course.price}</td>
                                    <td>₹ {(course.enrolled_students*course.price)}</td>
                                    <td>4/5</td>
                                    
                                    </tr>
                                    )
                                })}
                                
                            </tbody>

                        </table>
                      </div>
                  </div>
  </div>;
}

export default AdminCoursesComponent;
