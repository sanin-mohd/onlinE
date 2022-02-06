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
