import {React,useContext} from 'react';
import RequireAuth from './RequireAuth'
import AdminAuth from './AdminAuth'
import {Routes,Route} from 'react-router-dom'
import {AuthProvider} from './AuthContext'

import Home from './pages/Home';
import ThemePage from './pages/ThemePage'
import CourseDetails from './pages/CourseDetails';
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
import UserDetails from './pages/UserDetails'
import AllCourses from './pages/AllCourses'

function Main() {

  return <div>
      <AuthProvider>
      <Routes>
        {/* Admin Routes */}
        <Route path="/admin" element={<AdminLogin/>}></Route>
        <Route path="/admin/dashboard" element={<AdminAuth><AdminDashboard/></AdminAuth>}></Route>
        <Route path="/admin/users" element={<AdminAuth><AdminUsers/></AdminAuth>}></Route>
        <Route path="/admin/courses" element={<AdminAuth><AdminCourses/></AdminAuth>}></Route>
        <Route path="/admin/categories" element={<AdminAuth><AdminCategories/></AdminAuth>}></Route>


        {/* User Routes */}
        <Route path="/" element={<ThemePage/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/register" element={<Register/>}></Route>
        <Route path="/home" element={<RequireAuth><Home/></RequireAuth>}/>
        <Route path="/all_courses" element={<RequireAuth><AllCourses/></RequireAuth>}></Route>
        <Route path="/details/:course_id" element={<RequireAuth><CourseDetails/></RequireAuth>}></Route>
        <Route path="/user_details/:user_id" element={<RequireAuth><UserDetails/></RequireAuth>}></Route>
        <Route path="/dashboard" element={<RequireAuth><Dashboard/></RequireAuth>}></Route>
        <Route path="/wallet" element={<RequireAuth><Wallet/></RequireAuth>}></Route>
        <Route path="/enrolled_courses" element={<RequireAuth><EnrolledCourses/></RequireAuth>}></Route>
        <Route path="/my_students" element={<RequireAuth><MyStudents/></RequireAuth>}></Route>
        <Route path="/my_courses" element={<RequireAuth><MyCourses/></RequireAuth>}></Route>
        <Route path="/add_course" element={<RequireAuth><AddCourse/></RequireAuth>}></Route>
        <Route path="/profile_settings" element={<RequireAuth><ProfileSettings/></RequireAuth>}></Route>
        <Route path="/change_password" element={<RequireAuth><ChangePassword/></RequireAuth>}></Route>
        <Route path="/messenger" element={<RequireAuth><Messenger/></RequireAuth>}></Route>


      </Routes>
      </AuthProvider>
  </div>;
}

export default Main;
