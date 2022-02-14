import {React,useState,useEffect} from 'react';
import Swal from 'sweetalert2'
import axios from 'axios';
import BaseUrl from '../BaseUrl'


function ChangePasswordComponent() {
    const [passwordDetails, setPasswordDetails] = useState({
            old_password: null,
            password: null,
            c_password: null,
            errors: {
                old_password: '',
                password: '',
                c_password: ''
            }
    })
    const handleChange = (event) => {
        event.preventDefault();
        const { name, value } = event.target;
        
        let errors = passwordDetails.errors;
        switch (name) {
          case 'old_password': 
            errors.old_password = 
              value.length < 4
                ? 'Password must be at least 4 characters long!'
                : '';
            break;
          case 'password': 
            errors.password = 
            value.length < 4
                ? 'Password must be at least 4 characters long!'
                : document.getElementById("password").value==document.getElementById("c_password").value ? '':'New Password and confirm password must be same';
            if (errors.password==''){
                  errors.c_password = ''
            }else{
              errors.c_password=errors.password
            }
            break;
          case 'c_password': 
            errors.c_password = 
              value.length < 4
                ? 'Password must be at least 4 characters long!'
                : document.getElementById("password").value==document.getElementById("c_password").value ? '':'New Password and confirm password must be same';
            if (errors.c_password==''){
              errors.password = ''
            }else{
              errors.password=errors.c_password
            }
            break;
          default:
            break;
        }
        
        setPasswordDetails({...passwordDetails,errors});
        setPasswordDetails({...passwordDetails,[name]: value});
        console.log(passwordDetails);
      }
    const handleSubmit = (event) => {
        event.preventDefault();
        
        const _passwordData = new FormData();
        _passwordData.append('password',passwordDetails.password)
        console.log("Old password in state is ==>>");
        console.log(passwordDetails.old_password);
        console.log("Password stored in state is ==>>");
        console.log(passwordDetails.password);
        const accessToken=JSON.parse(localStorage.getItem('authToken')).access
        const user_id=JSON.parse(localStorage.getItem('user')).user_id
        const email=JSON.parse(localStorage.getItem('user')).email
        const old_passwordData = new FormData()
        old_passwordData.append('old_password',passwordDetails.old_password)
        old_passwordData.append('email',email)
        if (passwordDetails.errors.old_password != '' || passwordDetails.errors.c_password != '' || passwordDetails.errors.password != '') {
          Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'Validation Error',
            showConfirmButton: false,
            timer: 1000
          })
        }else{
          axios.post(BaseUrl+'check_old_password',old_passwordData,{ headers: {"Authorization" : `Bearer ${accessToken}`, 'content-type' :'application/json' } }).then((res) => {
            console.log("-----------------------------");
            console.log(res.data);
            if (res.data.status===true){
                  axios.post(BaseUrl+'change_password/'+user_id+'/',_passwordData,{ headers: {"Authorization" : `Bearer ${accessToken}`, 'content-type' :'application/json' } }).then((response) => {
                  console.log(response.data);
                  console.log("Password Changed successfully");
                  Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Password Changed successfully',
                    showConfirmButton: false,
                    timer: 1000
                    })
                    window.location.reload();
                  
                })
              }else{
                Swal.fire({
                  position: 'center',
                  icon: 'error',
                  title: 'Old password is invalid',
                  showConfirmButton: false,
                  timer: 1000
                })
              }
          }).catch((error) => {
          console.log(error.response.data);
          console.log("---------------CATCH BLOCK");
          console.log(error.response)
          Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'Some thing went wrong',
            showConfirmButton: false,
            timer: 1000
          })
            
        })

        }
        
       
    };
    
  return <div>
         <div className="card">
             <form action="" onSubmit={handleSubmit}>
                        
                      <h3 className="card-header">Change Password</h3>
                      <div className="card-body">
                <div className="mb-3 row">
                    <label htmlFor="staticEmail" className="col-sm-2 col-form-label">Current Password</label>
                    <div className="col-sm-10">
                    <input onChange={handleChange} type="password" name="old_password"  className="form-control-plaintext"  placeholder="************"/>
                    </div>
                    {passwordDetails.errors.old_password && 
                    <span style={{color: 'red'}} className='error'>{passwordDetails.errors.old_password}</span>}
                </div>
                <div className="mb-3 row">
                    <label htmlFor="staticEmail" className="col-sm-2 col-form-label">New Password</label>
                    <div className="col-sm-10">
                    <input onChange={handleChange} type="password" id="password" name="password"  className="form-control-plaintext"  placeholder="************"/>
                    </div>
                    {passwordDetails.errors.password && 
                    <span style={{color: 'red'}} className='error'>{passwordDetails.errors.password}</span>}
                </div>
                <div className="mb-3 row">
                    <label htmlFor="staticEmail" className="col-sm-2 col-form-label">Confirm Password</label>
                    <div className="col-sm-10">
                    <input onChange={handleChange} type="password" name="c_password" id="c_password"  className="form-control-plaintext"  placeholder="************"/>
                    </div>
                    {passwordDetails.errors.c_password &&
                    <span style={{color: 'red'}} className='error'>{passwordDetails.errors.c_password}</span>}
                </div>
                
               <button  className="btn btn-dark float-end mb-4 col-12">Update</button>
                </div>
             </form>
            </div>


  </div>;
}

export default ChangePasswordComponent;
