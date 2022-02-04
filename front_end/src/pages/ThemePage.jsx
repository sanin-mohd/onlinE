import {React,useEffect,useContext} from 'react';
import ThemeHeader from '../components/ThemeHeader';
import Footer from '../components/Footer';
import AuthContext from '../AuthContext'
import { useNavigate } from 'react-router';
function ThemePage() {
    const navigate = useNavigate()
    const {user} = useContext(AuthContext)
    useEffect(() => {
        document.title="OnlinE"
      if (user){
        navigate('/home')
      }
     
    });

  return <div>
      <ThemeHeader />
      <div className="">
            <div className="">
                <div className="col-12 bg-dark">
                  
                   <video style={{width: '100%', height:'auto'}} autoPlay muted loop>
                   <source src="/video.mp4" type="video/mp4"/>
                    
                    </video>
                </div>
            </div>
      </div>
      <Footer/>
  </div>;
}

export default ThemePage;

