import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomeCard from './components/HomeCard';
import AboutCard from './components/AboutCard';
import CuisineCard from './components/CuisineCard';

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/cuisine">Cuisine</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path="/about" element={<About/>}/>
          <Route path="/cuisine" element={<Cuisine/>} />
        </Routes>
      </div>
    </Router>
  );
}

function Home() {
  return <HomeCard />;
}

function About() {
  return <AboutCard />;
}

function Cuisine() {
  return <CuisineCard />;
}