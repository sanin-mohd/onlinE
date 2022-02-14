import React from 'react';
import {useSelector,useDispatch} from 'react-redux'
import {change_user_data} from '../Redux/user/UserDataSlice'
import axios from 'axios';
import BaseUrl from '../BaseUrl'
import Swal from 'sweetalert2'


function ProfileSettingsComponent() {
    const userdata = useSelector(state => state.user_data.value)
    const dispatch = useDispatch()
    const handleChange = (e) => {
        dispatch(change_user_data({
            user_data: {...userdata,[e.target.name]: e.target.value}
        }))
    }
    const handleFileChange = (e) => {
        dispatch(change_user_data({
            user_data: {...userdata,[e.target.name]: e.target.files[0]}
        }))
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const form_Data = new FormData();
        form_Data.append('username',userdata.username)
        form_Data.append('email',userdata.email)
        form_Data.append('mobile',userdata.mobile)
        form_Data.append('bio',userdata.bio)
        form_Data.append('interests',userdata.interests)
        form_Data.append('account_holder_name',userdata.account_holder_name)
        form_Data.append('acc',userdata.acc)
        form_Data.append('ifsc',userdata.ifsc)
        form_Data.append('bank',userdata.bank)
        form_Data.append('is_active',true)
        console.log("New Data To Add");
        console.log(userdata);
        axios.put(BaseUrl+'user_details/'+userdata.id+'/',form_Data,{headers: {'Content-Type': 'multipart/form-data'}}).then(response =>{
            console.log("user Details update working");
            console.log(response.data);
            localStorage.setItem('user_data',JSON.stringify(response.data));
            dispatch(change_user_data({
                user_data: response.data
            }))
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Your Data Has Been Updated',
                showConfirmButton: false,
                timer: 1000
                })
            
        }).catch(error =>{
            console.log("user Details update NOT working");
            console.log(error);
            Swal.fire({
                position: 'center',
                icon: 'error',
                title: 'Invalid Data',
                showConfirmButton: false,
                timer: 1000
              })
        })
    }
  return <div>
      <form action="" onSubmit={handleSubmit}>
     <div className="card">
                      <h3 className="card-header">Profile Settings </h3>
                      <div className="card-body">
                
                <div className="mb-3 row">
                    <label htmlFor="staticEmail" className="col-sm-2 col-form-label">Username</label>
                    <div className="col-sm-6">
                    <input type="text" name="username" value={userdata.username} onChange={handleChange} className="form-control-plaintext" id="staticEmail" placeholder="sanin"/>
                    </div>
                </div>
                <div className="mb-3 row">
                    <label htmlFor="staticEmail" className="col-sm-2 col-form-label">Email</label>
                    <div className="col-sm-6">
                    <input type="text" name="email" value={userdata.email} onChange={handleChange} className="form-control-plaintext" id="staticEmail" placeholder="email@example.com"/>
                    </div>
                </div>
                <div className="mb-3 row">
                    <label htmlFor="staticEmail" className="col-sm-2 col-form-label">Contat</label>
                    <div className="col-sm-6">
                    <input type="text" name="mobile" value={userdata.mobile} onChange={handleChange} className="form-control-plaintext" id="staticEmail" placeholder="+91 8301868891"/>
                    </div>
                </div>
                
                <div className="mb-3 row">
                    <label htmlFor="staticEmail" className="col-sm-2 col-form-label">Bio Details</label>
                    <div className="col-sm-6">
                    <textarea row="4" name="bio" onChange={handleChange} value={userdata.bio}  type="text"  className="form-control-plaintext" id="staticEmail" placeholder="Enter"/>
                    </div>
                </div>
                <div className="mb-3 row">
                    <label htmlFor="staticEmail" className="col-sm-2 col-form-label">Interests</label>
                    <div className="col-sm-6">
                    <textarea row="4" type="text" name='interests' onChange={handleChange} value={userdata.interests} className="form-control-plaintext" id="staticEmail" placeholder="Enter"/>
                    </div>
                </div>
                <h5 className='card-header'>Bank Datails</h5>
                <div className="mb-3 row">
                    <label htmlFor="staticEmail" className="col-sm-2 col-form-label">Account Holder</label>
                    <div className="col-sm-10">
                    <input type="text" name='account_holder_name' value={userdata.account_holder_name} onChange={handleChange} className="form-control-plaintext" id="staticEmail" placeholder="Enter"/>
                    </div>
                </div>
                <div className="mb-3 row">
                    <label htmlFor="staticEmail" className="col-sm-2 col-form-label">Bank Name</label>
                    <div className="col-sm-10">
                    <input type="text" name='bank' value={userdata.bank} onChange={handleChange}  className="form-control-plaintext" id="staticEmail" placeholder="Enter"/>
                    </div>
                </div>
                <div className="mb-3 row">
                    <label htmlFor="staticEmail" className="col-sm-2 col-form-label">Acc Number</label>
                    <div className="col-sm-10">
                    <input type="text" name = 'acc' value={userdata.acc} onChange={handleChange} className="form-control-plaintext" id="staticEmail" placeholder="Enter"/>
                    </div>
                </div>
                <div className="mb-3 row">
                    <label htmlFor="staticEmail" className="col-sm-2 col-form-label">IFSC Code</label>
                    <div className="col-sm-10">
                    <input type="text" name='ifsc' value={userdata.ifsc} onChange={handleChange} className="form-control-plaintext" id="staticEmail" placeholder="Enter"/>
                    </div>
                </div>
               <button className="btn btn-dark float-end col-12">Update</button>
                </div>
            </div>
        </form>
  </div>;
}

export default ProfileSettingsComponent;
