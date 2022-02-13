import axios from 'axios';
import {React,useEffect,useState,useContext} from 'react';
import BaseUrl from '../BaseUrl'
import AuthContext from '../AuthContext'
import {getAllcategories} from '../user axios functions/Axios'
import Swal from 'sweetalert2'


function AddCourseComponent() {
    const {authToken,user} = useContext(AuthContext)
    const [categories, setCategories] = useState([]);
    const [courseDetails, setCourseDetails] = useState({'creator':`${user.user_id}`});

    useEffect(() => {
        console.log("Page loaded successfully");
          console.log(user.user_id);
        getAllcategories().then((categories) => {
            setCategories(categories)
            categories.forEach((category) =>{
                console.log(category.name);
            })
        })
    },[])
    const handleChange=((event)=>{
        setCourseDetails({
            ...courseDetails,[event.target.name] : event.target.value
        })
        console.log(courseDetails);
    })
    const handleFileChange=((event)=>{
        setCourseDetails({
            ...courseDetails,[event.target.name] : event.target.files[0]
        })
        
        
    })
    const handleSubmit = (event) => {
          event.preventDefault();
          const accessToken=JSON.parse(localStorage.getItem('authToken')).access
          console.log("Course Details");
          console.log(courseDetails);
          console.log(accessToken); 

        //   const form_Data = new FormData();
          
        //   form_Data.append('thumbnail',courseDetails.thumbnail);    
        //   form_Data.append('category',courseDetails.category);
        //   form_Data.append('creator',user.user_id);
        //   form_Data.append('title',courseDetails.title);
        //   form_Data.append('description',courseDetails.description);
        //   form_Data.append('price',courseDetails.price);
        //   form_Data.append('used_techs',courseDetails.used_techs);
          const data = {
            'thumbnail':courseDetails.thumbnail,
            'category':courseDetails.category,
            'creator':user.user_id,
            'title':courseDetails.title,
            'description':courseDetails.description,
            'price':courseDetails.price,
            'used_techs':courseDetails.used_techs
        }
        console.log("DATA IS");
        console.log(data);
          axios.post(BaseUrl+'course_list',
                        data,
                        { headers: {"Authorization" : `Bearer ${accessToken}`,
                         'content-type' : "multipart/form-data ; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW" 
                        } }).then((response) => {
                            console.log(response.data);
                            console.log("Course added successfully");
                        
                            Swal.fire({
                                position: 'center',
                                icon: 'success',
                                title: 'Course added successfully',
                                showConfirmButton: false,
                                timer: 1000
                                })
                                window.location.reload();
                            
                            }).catch((error) => {
                            console.log(error.response.data);
                            console.log("---------------CATCH BLOCK");
                            console.log(error.response)
                            Swal.fire({
                                position: 'center',
                                icon: 'error',
                                title: 'Something Went Wrong',
                                showConfirmButton: false,
                                timer: 1000
                            })
                                
                            })
      };
  return <div>
               <div className="card">
                      <h3 className="card-header">Add Course</h3>
                      <div className="card-body">
            <form onSubmit={handleSubmit}>
                <div className="mb-3 row">
                    <label htmlFor="staticEmail" className="col-sm-2 col-form-label">Course Title</label>
                    <div className="col-sm-6">
                    <input type="text" name="title" onChange={handleChange} className="form-control-plaintext" id="staticEmail" placeholder="Enter Here"/>
                    </div>
                </div>
                <div className="mb-3 row">
                
                    <label htmlFor="staticEmail" className="col-sm-2 col-form-label">Category</label>
                    <div className="col-sm-6">
                    <select name="category" onChange={handleChange} className="form-select" aria-label="Default select example">
                        {categories.map((category,index) =>{
                            return(<option key={index} value={category.id}>{category.name}</option>)
                        })}
                        
                    </select>
                    
                    </div>
                </div>
                <div className="mb-3 row">
                    <label htmlFor="staticEmail" className="col-sm-2 col-form-label">Description</label>
                    <div className="col-sm-6">
                    <textarea onChange={handleChange} name="description" rows="6" type="text"  className="form-control-plaintext" id="staticEmail" placeholder="Enter Here"/>
                    </div>
                </div>
                <div className="mb-3 row">
                    <label htmlFor="staticEmail" className="col-sm-2 col-form-label">Thumbnail</label>
                    <div className="col-sm-6">
                    <input onChange={handleFileChange} name="thumbnail" type="file" readOnly className="form-control-plaintext"/>
                    </div>
                </div>
                <div className="mb-3 row">
                    <label htmlFor="staticEmail" className="col-sm-2 col-form-label">Pricing (₹)</label>
                    <div className="col-sm-6">
                    <input onChange={handleChange} name="price" type="number" placeholder="Enter Price"  className="form-control-plaintext"/>
                    </div>
                </div>
                <div className="mb-3 row">
                    <label htmlFor="staticEmail" className="col-sm-2 col-form-label">Technologies Used</label>
                    <div className="col-sm-6">
                    <textarea onChange={handleChange} name="used_techs" rows="4" type="text"  className="form-control-plaintext" id="staticEmail" placeholder="Django,React.js,RESTful API..."/>
                    </div>
                </div>
                
               
               <button type="submit"  className="btn btn-dark float-end col-12">Submit</button>
            </form>
                </div>
            </div>
  </div>;
}

export default AddCourseComponent;
