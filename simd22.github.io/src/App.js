import {BrowserRouter, Link, Route, Routes} from 'react-router-dom'

import Home from "./components/Home";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Spotify from './components/Spotify';
import Shortener from './components/Shortener';
import Portfolio from './components/Portfolio'
// import Projects from "./components/Projects";
// import Main from './components/Main';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path = "/" element = {<Home />} />
          <Route path = "/about" element = {<About />} />
          <Route path="/spotify" element={<Spotify />} />
          <Route path="/spotify" element={<Shortener />} />
          <Route path="/spotify" element={<Portfolio />} />
          {/* <Route path = "/projects" element = {<Projects />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
