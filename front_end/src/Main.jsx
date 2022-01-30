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
import AddCourse from './pages/AddCourse'
import Wallet from './pages/Wallet'
import Messenger from './pages/Messenger'
import AdminLogin from './admin pages/AdminLogin'
import AdminDashboard from './admin pages/AdminDashboard'
import AdminUsers from './admin pages/AdminUsers'
import AdminCourses from './admin pages/AdminCourses'
import AdminCategories from './admin pages/AdminCategories'
function Main() {
  return <div>
      
      <Routes>

        {/* User Routes */}
        <Route path="/" element={<ThemePage/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/register" element={<Register/>}></Route>
        <Route path="/home" element={<Home/>}></Route>
        <Route path="/details/:course_id" element={<CourseDetails/>}></Route>
        <Route path="/dashboard" element={<Dashboard/>}></Route>
        <Route path="/wallet" element={<Wallet/>}></Route>
        <Route path="/enrolled_courses" element={<EnrolledCourses/>}></Route>
        <Route path="/my_students" element={<MyStudents/>}></Route>
        <Route path="/my_courses" element={<MyCourses/>}></Route>
        <Route path="/add_course" element={<AddCourse/>}></Route>
        <Route path="/profile_settings" element={<ProfileSettings/>}></Route>
        <Route path="/change_password" element={<ChangePassword/>}></Route>
        <Route path="/messenger" element={<Messenger/>}></Route>

        {/* Admin Routes */}
        <Route path="/admin" element={<AdminLogin/>}></Route>
        <Route path="/admin/dashboard" element={<AdminDashboard/>}></Route>
        <Route path="/admin/users" element={<AdminUsers/>}></Route>
        <Route path="/admin/courses" element={<AdminCourses/>}></Route>
        <Route path="/admin/categories" element={<AdminCategories/>}></Route>

      </Routes>

  </div>;
}

export default Main;
