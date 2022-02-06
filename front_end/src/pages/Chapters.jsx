import {React,useEffect} from 'react';
import {Link} from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ChaptersComponent from '../components/ChaptersComponent'
import UserSideBar from '../components/UserSideBar';
function Chapters() {
    
    useEffect(() => {
        document.title="Chapters"
       
      });
  return <div>
      <Header/>
      <div className="container mt-4">
          <div className="row mb-5">
              <aside className='col-md-3'>
                    <UserSideBar/>
              </aside>
              <div className="col-md-9">
                    <ChaptersComponent/>

              </div>
          </div>
      </div>
      <Footer/>
  </div>;
}

export default Chapters;
