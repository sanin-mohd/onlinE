import React from 'react';
import Home from './pages/Home';
import ThemePage from './pages/ThemePage'
import CourseDetails from './pages/CourseDetails';
import {Routes,Route} from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'
function Main() {
  return <div>
      
      <Routes>
      
        <Route path="/" element={<ThemePage/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/register" element={<Register/>}></Route>
        <Route path="/home" element={<Home/>}></Route>
        <Route path="/dashboard" element={<Dashboard/>}></Route>
        <Route path="/details/:course_id" element={<CourseDetails/>}></Route>
        
      </Routes>

  </div>;
}

export default Main;
