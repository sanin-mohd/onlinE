import {React,useContext} from 'react';
import {Route, Navigate} from 'react-router-dom'
import AuthContext from './AuthContext'

const RequireAuth =({children, ...rest})=> {
    let {user}=useContext(AuthContext)
    console.log("RequireAuth works");
    return (<>{user ? children : <Navigate to="/login"/>}</>);

}

export default RequireAuth;
