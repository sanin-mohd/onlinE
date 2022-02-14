import {React,createContext,useState,useEffect} from 'react';
import BaseUrl from './BaseUrl'
import jwt_decode from "jwt-decode";
import { useNavigate } from 'react-router';
import axios from 'axios';


const AuthContext = createContext()
export default AuthContext;
export const AuthProvider = ({children})=>{

    
    let navigate = useNavigate();
    
    const [authToken, setAuthToken] = useState(()=>localStorage.getItem('authToken') ? JSON.parse(localStorage.getItem('authToken')):null);
    const [user, setUser] = useState(()=>localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')):null);
    const [loading, setLoading] = useState(true);
    
    const getUserData = (id) => {
        axios.get(BaseUrl+'user_details/'+id).then(response =>{
            console.log("Got All user Details");
            console.log(response.data);
            localStorage.setItem('user_data',JSON.stringify(response.data));
            
        }).catch(error =>{
            console.log("Not working All user Details");
            console.log(error);
        })
        
    }
    let loginUser = async (userDetails,response) =>{

        console.log("Form Submitted");
        console.log(userDetails);
        console.log(response.data);
        console.log(response);
        if (response.status === 200){
            
            setAuthToken(response.data);

            var decoded = jwt_decode(response.data.access);
            console.log("Successfully logged in 1");
            console.log(decoded);
            setUser(decoded);
            getUserData(decoded.user_id);
            console.log("Successfully logged in 2 ");
            localStorage.setItem('user', JSON.stringify(decoded));
            localStorage.setItem('authToken', JSON.stringify(response.data));
            if(decoded.is_superuser) {
                navigate('/admin/dashboard');
                
            }else{
                
                navigate('/home')
            }
        }else{
            console.log("Somthing is wrong");
        }


    }
    let logOutUser = () => {
        setAuthToken(null);
        setUser(null);
        localStorage.removeItem('authToken');
        localStorage.removeItem('user');
        navigate('/login')
    }
    let updateToken = async () => {
        console.log("Update Token called!");
        let response = await fetch(BaseUrl+'token/refresh/',
        {
            method: 'POST',
            headers:{ 'Content-Type': 'application/json'},
            body: JSON.stringify({'refresh':authToken.refresh})
        })
        let data = await response.json()
        console.log(data);
        console.log(response);
        if (response.status === 200){
            console.log("Successfully Tokens updated");
            setAuthToken(data);

            var decoded = jwt_decode(data.access);
            setUser(decoded);
            localStorage.setItem('user', JSON.stringify(decoded));
            localStorage.setItem('authToken', JSON.stringify(data));
            
        }else{
            console.log("refresh token not valid");
            logOutUser()
        }
    }
    useEffect(()=>{
        console.log(user)
    },[user])

    useEffect(()=>{
        let interval = setInterval(()=>{
            if(authToken){
                updateToken()
            }
        },250000)
        return ()=> clearInterval(interval)

    },[loading,authToken])
    let contexData = {
        loginUser: loginUser,
        user: user,
        logOutUser: logOutUser
    }
    return (
        <AuthContext.Provider value={contexData}>
            {children}    
        </AuthContext.Provider>
    )
}