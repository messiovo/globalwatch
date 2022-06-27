import './styles/index.css';
import { useEffect } from 'react';
import { Navbar, Footer } from './components';
import {Routes, Link, Route, BrowserRouter} from 'react-router-dom/index';
import { Homepage, Country } from './pages'
import Aos from 'aos';
import 'aos/dist/aos.css';
function App() {
  useEffect(()=>{
        Aos.init({
          duration: 1500
        });
    Aos.refresh();
    window.scrollTo(0, 0);
  },[])
  return (
      <div>
      <Navbar/>
      <Routes>
    <Route path='/' element={<Homepage />} />
    <Route path='/country/:countryId' element={<Country />} />
  </Routes>
      <Footer/>
      </div>
  );
}

export default App;
