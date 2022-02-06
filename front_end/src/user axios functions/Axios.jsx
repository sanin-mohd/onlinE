import axios from 'axios';
import BaseUrl from '../BaseUrl'



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

export const getUsercourses = () => {
    return new Promise((resolve, reject) => {
        const AccessToken = JSON.parse(localStorage.getItem('authToken')).access
        axios.get(BaseUrl+'user_courses', { headers: {"Authorization" : `Bearer ${AccessToken}`} }).then((response) => {
            console.log(response.data);
            console.log("getUsercourses  Axios working");
            resolve(response.data)
 
        }).catch((err) => {
            console.log("getUsercourses  Axios Not working");
            reject(err)


        })

    })

}
