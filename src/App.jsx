import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Donate from './pages/Donate';
import AnnaDaan from './pages/AnnaDaan';
import GauSeva from './pages/GauSeva';
import MandirNirman from './pages/MandirNirman';
import About from './pages/About';
import Contact from './pages/Contact';
import Events from './pages/Events';
import Gallery from './pages/Gallery';
import Visit from './pages/Visit';
import ThankYou from './pages/ThankYou';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/seva/anna-daan" element={<AnnaDaan />} />
        <Route path="/seva/gau-seva" element={<GauSeva />} />
        <Route path="/seva/mandir-nirman" element={<MandirNirman />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/events" element={<Events />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/visit" element={<Visit />} />
        <Route path="/thank-you" element={<ThankYou />} />
      </Routes>
    </Router>
  );
}
