import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import About from './pages/About';
import Extras from './pages/Extras';
import MagickML from './pages/MagickML';
import Project89 from './pages/Project89';
import RawMagic from './pages/RawMagic';
import Proxim8 from './pages/Proxim8';
import './styles/global.css';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/extras" element={<Extras />} />
          <Route path="/work/magick" element={<MagickML />} />
          <Route path="/work/project89" element={<Project89 />} />
          <Route path="/work/rawmagic" element={<RawMagic />} />
          <Route path="/work/proxim8" element={<Proxim8 />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
