import {React,useEffect} from 'react';
import {Link} from 'react-router-dom'
import AdminHeader from '../admin components/AdminHeader'
import AdminCategoriesComponent from '../admin components/AdminCategoriesComponent' 
import AdminAddCategory from '../admin components/AdminAddCategory' 
import AdminSideBar from '../admin components/AdminSideBar';

function AdminCategories() {
    useEffect(() => {
        document.title="Admin Categories"
       
      });
  return <div>
      <AdminHeader/>
      <div className="container mt-4">
          <div className="row mb-5">
              <aside className='col-md-3'>
                    <AdminSideBar/>
              </aside>
              <div className="col-md-9">
                    <AdminAddCategory/>
                    
              </div>
              <div className="col-md-12 mt-2">
              <AdminCategoriesComponent/>
              </div>
          </div>
      </div>
  </div>;
}

export default AdminCategories;