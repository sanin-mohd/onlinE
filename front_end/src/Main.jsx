import React from 'react';
import Home from './pages/Home';
import ThemePage from './pages/ThemePage'
import CourseDetails from './pages/CourseDetails';
import {Routes,Route} from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'
import EnrolledCourses from './pages/EnrolledCourses'
import MyStudents from './pages/MyStudents'
import MyCourses from './pages/MyCourses'
import ProfileSettings from './pages/ProfileSettings'
import ChangePassword from './pages/ChangePassword'
function Main() {
  return <div>
      
      <Routes>
      
        <Route path="/" element={<ThemePage/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/register" element={<Register/>}></Route>
        <Route path="/home" element={<Home/>}></Route>
        <Route path="/dashboard" element={<Dashboard/>}></Route>
        <Route path="/enrolled_courses" element={<EnrolledCourses/>}></Route>
        <Route path="/my_students" element={<MyStudents/>}></Route>
        <Route path="/my_courses" element={<MyCourses/>}></Route>
        <Route path="/profile_settings" element={<ProfileSettings/>}></Route>
        <Route path="/change_password" element={<ChangePassword/>}></Route>
        <Route path="/details/:course_id" element={<CourseDetails/>}></Route>
        
       
      </Routes>

  </div>;
}

export default Main;
