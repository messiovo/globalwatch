import './styles/index.css';
import { Navbar } from './components';
import {Routes, Link, Route, BrowserRouter} from 'react-router-dom/index';
import { Homepage } from './pages'
function App() {
  return (
      <div className=''>
      <Navbar/>
      <Routes>
    <Route path='/' element={<Homepage />} />
  </Routes>
      </div>
  );
}

export default App;
