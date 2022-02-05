import {React,useContext} from 'react';
import {Route, Navigate} from 'react-router-dom'
import AuthContext from './AuthContext'

const AdminAuth =({children, ...rest})=> {
    let {user}=useContext(AuthContext)
    console.log("RequireAuth works");
    return (<>{user.is_superuser ? children : <Navigate to="/login"/>}</>);

}

export default AdminAuth;
