import axios from 'axios';
import {React,useState} from 'react';
import BaseUrl from '../BaseUrl'
import Swal from 'sweetalert2'

function AdminCategory() {
    const [category, setCategory] = useState({name: ''})
    const handleChange = (event) => {
        setCategory({[event.target.name]: event.target.value})
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        const accessToken=JSON.parse(localStorage.getItem('authToken')).access
        axios.post(BaseUrl+"course_category_list",category,{ headers: {"Authorization" : `Bearer ${accessToken}`, 'content-type' : "application/json" } }).then((response) => {
        console.log(response.data);
        console.log("Category added successfully");
        
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Category added successfully',
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
          title: 'Category Already Exists',
          showConfirmButton: false,
          timer: 1000
        })
          
      })
       
    };

  return <div>
     <div className="card">
                      <h3 className="card-header">Add Category</h3>
                      <div className="card-body">
                <form action="" onSubmit={handleSubmit}>
                <div className="mb-3 row">
                    <label htmlFor="staticEmail" className="col-sm-2 col-form-label">Category Name</label>
                    <div className="col-sm-6">
                    <input onChange={handleChange} type="text" name="name"  className="form-control-plaintext" id="staticEmail" placeholder="Enter Here"/>
                    </div>
                </div>
                
               <button type="submit" className="btn btn-dark float-end col-12">Add</button>

                </form>
                
                </div>
            </div>
  </div>;
}

export default AdminCategory;