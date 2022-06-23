import './styles/index.css';
import { Navbar, Footer } from './components';
import {Routes, Link, Route, BrowserRouter} from 'react-router-dom/index';
import { Homepage, Country } from './pages'
function App() {
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
