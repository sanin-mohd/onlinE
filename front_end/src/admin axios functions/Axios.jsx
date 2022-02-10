import axios from 'axios';
import BaseUrl from '../BaseUrl'



export const getAllUsers = () => {
    return new Promise((resolve, reject) => {

        const AccessToken = JSON.parse(localStorage.getItem('authToken')).access

        axios.get(BaseUrl+'users_list').then((response) => {
            console.log(response.data);
            console.log("getAllUsers Axios working");
            resolve(response.data)

        }).catch((err) => {
            console.log("getAllUsers Axios Not working");
            reject(err)


        })

    })

}
export const updateUserStatus = (updateTo,user_id) => {
    
        const AccessToken = JSON.parse(localStorage.getItem('authToken')).access

        const data = updateTo ? {'is_active': true}:{'is_active':false}
        axios.patch(BaseUrl+'user_details/'+user_id+'/',data).then((response) => {
            console.log(response.data);
            console.log("updateUserStatus Axios working");

        }).catch((err) => {
            console.log("updateUserStatus Not working");
            console.log(err);


        })

   

}
export const getAllcourses = () => {
    return new Promise((resolve, reject) => {
        const AccessToken = JSON.parse(localStorage.getItem('authToken')).access
        axios.get(BaseUrl+'course_list', { headers: {"Authorization" : `Bearer ${AccessToken}`} }).then((response) => {
            console.log(response.data);
            console.log("getAllcourses  Axios working");
            resolve(response.data)
 
        }).catch((err) => {
            console.log("getAllcourses  Axios Not working");
            reject(err)


        })

    })

}
export const getAllcategories = () => {
    return new Promise((resolve, reject) => {
        const AccessToken = JSON.parse(localStorage.getItem('authToken')).access
        axios.get(BaseUrl+'course_category_list', { headers: {"Authorization" : `Bearer ${AccessToken}`} }).then((response) => {
            console.log(response.data);
            console.log("getAllcategories Axios working");
            resolve(response.data)
 
        }).catch((err) => {
            console.log("getAllcategories Axios Not working");
            reject(err)


        })

    })

}
export const deleteCategory = (id) => {
    return new Promise((resolve, reject) => {
        const AccessToken = JSON.parse(localStorage.getItem('authToken')).access
        axios.delete(BaseUrl+'course_category_detail/'+id, { headers: {"Authorization" : `Bearer ${AccessToken}`} }).then((response) => {
            console.log(response.data);
            console.log("deleteCategory Axios working");
            resolve(response.data)
 
        }).catch((err) => {
            console.log("deleteCategory Axios Not working");
            reject(err)


        })

    })

}