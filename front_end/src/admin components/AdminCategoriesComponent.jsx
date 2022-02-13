import React from 'react';
import { useState,useEffect } from 'react';
import {Link} from 'react-router-dom'
import {getAllcategories,deleteCategory} from '../admin axios functions/Axios'
import Swal from 'sweetalert2'

function AdminCategoriesComponent() {
    const [categories, setCategories] = useState([])
    const handleClick = (id) =>{
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
                deleteCategory(id).then((res) =>{
                    console.log(res);
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Category deleted successfully',
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
            }
          })
        
    }
    useEffect(() => {
        getAllcategories().then((res) => {
            setCategories(res)
            res.map((category) =>{
                return console.log(category.name);
            })
        })
        
    },[])
  return <div>
              <div className="card">
                      <h3 className="card-header">Categories</h3>
                      <div className="card-body">
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th>Category Name</th>
                                    <th>Courses Available</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {categories.map((category,index) =>{
                                    return (
                                    <tr key={index} className="text-center">
                                    <td>{category.name}</td>
                                    <td>{}</td>
                                    <td><p className="text-decoration-none" ><p onClick={()=>{handleClick(category.id)}} className='card btn btn-danger text-dark text-decoration-none'>Delete</p></p></td>
                                </tr>

                                    )
                                })}
                                
                                
                                
                            </tbody>

                        </table>
                      </div>
                  </div>
  </div>;
}

export default AdminCategoriesComponent;
