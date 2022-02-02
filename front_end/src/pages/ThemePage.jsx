import {React,useEffect} from 'react';
import ThemeHeader from '../components/ThemeHeader';
import Footer from '../components/Footer';

function ThemePage() {
    useEffect(() => {
        document.title="OnlinE"
       
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

