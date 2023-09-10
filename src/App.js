import {BrowserRouter, Route, Routes} from 'react-router-dom'

import Home from "./components/Home";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Spotify from './components/Spotify';
import Shortener from './components/Shortener';
import Portfolio from './components/Portfolio'

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path = "/" element = {<Home />} />
          <Route path = "/about" element = {<About />} />
          <Route path="/spotify" element={<Spotify />} />
          <Route path="/shortener" element={<Shortener />} />
          <Route path="/portfolio" element={<Portfolio />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
