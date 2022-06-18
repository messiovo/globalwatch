import './styles/index.css';
import {Switch, Link, Route, BrowserRouter as Router} from 'react-router-dom';
import {Navbar} from './components';

function App() {
  return (
    <Router basename='/'>
      <div>
      <Navbar/>
      </div>
    </Router>
  );
}

export default App;
