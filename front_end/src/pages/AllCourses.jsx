import React from "react";
import {Link} from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FilterSideBar from '../components/FilterSideBar'
import AllCoursesComponent from '../components/AllCoursesComponent'
function AllCourses() {
    return <div>
    <Header/>
    <div className="container mt-4">
        <div className="row mb-5">
            <aside className='col-md-3'>
                  <FilterSideBar/>
            </aside>
            <div className="col-md-9">
                  
              <AllCoursesComponent/>
            </div>
        </div>
    </div>
    <Footer/>
</div>;
}


export default AllCourses;
