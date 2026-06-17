import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Donate from './pages/Donate';
import AnnaDaan from './pages/AnnaDaan';
import GauSeva from './pages/GauSeva';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/seva/anna-daan" element={<AnnaDaan />} />
        <Route path="/seva/gau-seva" element={<GauSeva />} />
      </Routes>
    </Router>
  );
}
