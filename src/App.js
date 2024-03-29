import './styles/index.css';
import { useEffect } from 'react';
import { Footer } from './components';
import {Routes, Route} from 'react-router-dom/index';
import { Homepage, Country } from './pages'
import Aos from 'aos';
import 'aos/dist/aos.css';
function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])
  useEffect(()=>{
        Aos.init({
          duration: 1500
        });
        Aos.refresh();
  },[])
  return (
      <>
  <Routes>
    <Route path='/' element={<Homepage />} />
    <Route path='/country/:countryId' element={<Country />} />
  </Routes>
      <Footer/>
      </>
  );
}

export default App;
